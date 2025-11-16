<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetBackpackLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // 為 Backpack 路由設置語言為繁體中文
        // 檢查多種可能的路徑模式
        $path = $request->path();
        $isBackpackRoute = str_starts_with($path, 'admin') 
            || str_starts_with($path, 'backpack')
            || $request->routeIs('backpack.*')
            || $request->routeIs('admin.*');
        
        if ($isBackpackRoute) {
            // 設置語言
            app()->setLocale('zh-Hant');
            \Illuminate\Support\Facades\App::setLocale('zh-Hant');
            
            // 確保翻譯器使用正確的語言
            $translator = app('translator');
            $translator->setLocale('zh-Hant');
        }

        return $next($request);
    }
}

