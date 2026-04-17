<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ErrorPageController;
use App\Http\Controllers\SitemapController;
use Rap2hpoutre\LaravelLogViewer\LogViewerController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});

Route::get('/terms-of-service', function () {
    return Inertia::render('TermsOfService');
});

Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

// Log Viewer - 只在非生產環境或特定條件下訪問
Route::get('logs', [LogViewerController::class, 'index'])
    ->middleware(\App\Http\Middleware\LogViewerAccess::class)
    ->name('log-viewer');

Route::fallback(function () {
    return app(ErrorPageController::class)->index();
});
