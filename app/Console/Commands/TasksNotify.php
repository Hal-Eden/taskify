<?php

namespace App\Console\Commands;

use App\Enums\TaskStatus;
use App\Mail\DueTaskNotification;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TasksNotify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tasks:notify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notify users for Due Tasks';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $users = User::with('tasks')->whereHas('tasks', function ($q) {
            $q->where('status', TaskStatus::PENDING)
                ->whereDate('due_date', '<', Carbon::today());
        })->with(['tasks' => function ($q) {
            $q->where('status', TaskStatus::PENDING)
                ->whereDate('due_date', '<', Carbon::today());
        }])->get();

        foreach ($users as $user) {
            Mail::to($user->email)->send(new DueTaskNotification($user));
        }
    }
}
