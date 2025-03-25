<?php

namespace App\Actions;

use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserAction
{
    public function __construct(protected User $model) {}

    public function create(array $data): User
    {
        return $this->model->create($data);
    }

    public function update(array $data, int $id): User
    {
        $myModel = $this->model->find($id);

        if (!$myModel) {
            throw new ModelNotFoundException("User dengan ID $id tidak ditemukan.");
        }

        $myModel->update($data);

        return $myModel;
    }

    public function delete(int $id): bool
    {
        $myModel = $this->model->find($id);

        if (!$myModel) {
            throw new ModelNotFoundException("User dengan ID $id tidak ditemukan.");
        }

        return $myModel->delete();
    }
}
