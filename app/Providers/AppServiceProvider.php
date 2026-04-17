<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (! app()->isLocal()) {
            // Ignore stale public/hot files outside local development.
            Vite::useHotFile(storage_path('framework/vite.hot.disabled'));
        }

        // 為 Backpack 路由設置語言為繁體中文
        if (request()->is('admin*') || request()->is('backpack*')) {
            app()->setLocale('zh-Hant');
            app('translator')->setLocale('zh-Hant');
        }
    }
}
