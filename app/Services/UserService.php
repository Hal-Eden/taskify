<?php

namespace App\Services;

use App\Exceptions\UserNotFoundException;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Gate;

class UserService implements ApiServiceInterface
{
    public function getAll(): Collection|array
    {
        Gate::authorize('viewAny', User::class);

        return User::with('tasks')->get();
    }

    public function getById(int $id): User
    {
        $user = User::with('tasks')->find($id);

        Gate::authorize('view', $user);

        if (!$user) {
            throw new UserNotFoundException();
        }

        return $user;
    }

    public function create(array $values): User
    {
        Gate::authorize('create', User::class);

        return User::create($values);
    }

    public function update(int $id, array $values): User
    {
        $user = $this->getById($id);

        Gate::authorize('update', $user);

        $user->update($values);

        return $user;
    }

    public function delete(int $id): bool
    {
        $user = $this->getById($id);

        Gate::authorize('delete', $user);

        return $user->delete();
    }

    public function search(string $term = null): Collection|array
    {
        Gate::authorize('viewAny', User::class);

        return User::with('tasks')->when($term, function ($q) use ($term) {
            return $q->where('name', 'like', '%' . $term . '%')
                ->orWhere('email', 'like', '%' . $term . '%');
        })->get();
    }
}
