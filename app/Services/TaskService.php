<?php

namespace App\Services;

use App\Exceptions\TaskNotFoundException;
use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Gate;

class TaskService implements ApiServiceInterface
{
    public function getAll(): Collection|array
    {
        return Task::with('user')->get();
    }

    public function getById(int $id): Task
    {
        $task = Task::with('user')->find($id);

        Gate::authorize('view', $task);

        if (!$task) {
            throw new TaskNotFoundException();
        }

        return $task;
    }

    public function create(array $values): Task
    {
        Gate::authorize('create', [Task::class, $values['user_id']]);

        return Task::create($values);
    }

    public function update(int $id, array $values): Task
    {
        $task = $this->getById($id);

        Gate::authorize('update', $task);

        $task->update($values);

        return $task;
    }

    public function delete(int $id): bool
    {
        $task = $this->getById($id);

        Gate::authorize('delete', $task);

        return $task->delete();
    }

    public function search(string $term = null, int $userId = null): Collection|array
    {
        Gate::authorize('viewAny', [Task::class, $userId]);

        return Task::when($term, function ($q) use ($term) {
            return $q->where('like', '%' . $term . '%');
        })->when($userId, function ($q) use ($userId) {
            return $q->where('user_id', $userId);
        })->get();
    }
}
