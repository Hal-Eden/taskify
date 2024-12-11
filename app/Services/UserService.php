<?php

namespace App\Services;

use App\Exceptions\UserNotFoundException;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserService implements ApiServiceInterface {
    public function getAll(): Collection|array
    {
        return User::with('tasks')->get();
    }

    public function getById(int $id): User {
        $user = User::with('tasks')->find($id);

        if (!$user) {
            throw new UserNotFoundException();
        }

        return $user;
    }

    public function create(array $values): User {
        return User::create($values);
    }

    public function update(int $id, array $values): User { 
        $user = $this->getById($id);
        
        $user->update($values);

        return $user;
    }

    public function destroy(int $id): bool {
        $user = $this->getById($id);

        return $user->delete();
    }
}