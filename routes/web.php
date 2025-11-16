<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Rap2hpoutre\LaravelLogViewer\LogViewerController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

// Log Viewer - 只在非生產環境或特定條件下訪問
Route::get('logs', [LogViewerController::class, 'index'])
    ->middleware(\App\Http\Middleware\LogViewerAccess::class)
    ->name('log-viewer');

Route::fallback(function () {
  return app(ErrorPageController::class)->index();
});