<?php

use Feature\Dashboard\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('', [DashboardController::class, 'index'])->middleware('auth');
Route::prefix('dashboard')->group(function () {
    Route::get('', [DashboardController::class, 'index'])->middleware('auth');
    // Route::get('summary', [DashboardController::class, 'summary'])->middleware('auth');
    // Route::get('proses', [DashboardController::class, 'proses'])->middleware('auth');
    Route::get('surat-masuk', [DashboardController::class, 'getSuratMasuk'])->middleware('auth');
    Route::get('surat-keluar', [DashboardController::class, 'getSuratKeluar'])->middleware('auth');
});