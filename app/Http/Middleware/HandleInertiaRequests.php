<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $meta = $this->getPageMeta($request);
        
        // Share meta to blade template
        View::share('meta', $meta);
        
        return [
            ...parent::share($request),
            'meta' => $meta,
        ];
    }

    /**
     * Get page-specific meta tags based on route
     */
    protected function getPageMeta(Request $request): array
    {
        $defaultMeta = config('meta.default', []);
        $route = $request->route();
        $path = $request->path();
        
        // Set default meta
        $meta = [
            'title' => $defaultMeta['title'],
            'description' => $defaultMeta['description'],
            'image' => $defaultMeta['image'],
            'canonical' => $request->url(),
            'url' => $request->url(),
            'type' => 'website',
        ];
        
        // Override with route-specific meta
        if ($path === '/' || $path === '') {
            $meta['title'] = '首頁 - ' . $defaultMeta['title'];
            $meta['description'] = $defaultMeta['description'];
            $meta['canonical'] = url('/');
        } elseif ($path === 'about') {
            $meta['title'] = '關於我們 - ' . $defaultMeta['title'];
            $meta['description'] = $defaultMeta['description'];
            $meta['canonical'] = url('/about');
        }
        
        return $meta;
    }
}
