<?php

namespace App\Services;

use App\Exceptions\TaskNotFoundException;
use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class TaskService implements ApiServiceInterface {
    public function getAll(): Collection|array
    {
        return Task::all();
    }

    public function getById(int $id): Task {
        $task = Task::find($id);

        if (!$task) {
            throw new TaskNotFoundException();
        }

        return $task;
    }

    public function create(array $values): Task {
        return Task::create($values);
    }

    public function update(int $id, array $values): Task { 
        $task = $this->getById($id);

        $task->update($values);

        return $task;
    }

    public function destroy(int $id): bool {
        $task = $this->getById($id);

        return $task->delete();
    }
}