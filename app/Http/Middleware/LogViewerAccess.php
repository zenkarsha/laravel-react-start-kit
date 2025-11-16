<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LogViewerAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // 只在開發環境或本地環境允許訪問
        if (app()->environment(['local', 'development', 'testing'])) {
            return $next($request);
        }
        
        // 生產環境需要額外驗證（例如：檢查 IP、認證等）
        // 這裡可以添加你的權限檢查邏輯
        // 例如：檢查用戶是否已登入且為管理員
        // if (auth()->check() && auth()->user()->isAdmin()) {
        //     return $next($request);
        // }
        
        abort(403, 'Unauthorized access to log viewer');
    }
}

