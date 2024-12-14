<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

interface ApiServiceInterface 
{
    public function getAll(): Collection|array;

    public function getById(int $id): Model;

    public function create(array $values): Model;

    public function update(int $id, array $values): Model;

    public function delete(int $id): bool;

    public function search(): Collection|array;

}