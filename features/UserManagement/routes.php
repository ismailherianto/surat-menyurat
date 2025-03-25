<?php

use Feature\UserManagement\UserManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('user-management')->group(function () {
    Route::get('', [UserManagementController::class, 'index'])->middleware('auth');
    Route::post('/', [UserManagementController::class, 'store'])->middleware('auth');
    Route::get('/list', [UserManagementController::class, 'list'])->middleware('auth');
    Route::put('/{id}', [UserManagementController::class, 'update'])->middleware('auth');
    Route::delete('/{id}', [UserManagementController::class, 'destroy'])->middleware('auth');
});
