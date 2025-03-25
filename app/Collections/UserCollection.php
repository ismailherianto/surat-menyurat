<?php

namespace App\Collections;

use App\Models\User;

class UserCollection
{
    public static function paginate($pageSize, $filters = [])
    {
        return User::orderBy('created_at', 'desc')
            ->paginate($pageSize);
    }

    public static function findOrFail(int $userId)
    {
        return User::findOrFail($userId);
    }
}
