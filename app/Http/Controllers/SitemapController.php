<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Route as RouteFacade;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = Sitemap::create();

        collect(RouteFacade::getRoutes())
            ->filter(fn (Route $route): bool => $this->shouldInclude($route))
            ->map(fn (Route $route): string => url($route->uri()))
            ->unique()
            ->sort()
            ->each(fn (string $url) => $sitemap->add(Url::create($url)));

        return response($sitemap->render(), 200, [
            'Content-Type' => 'application/xml',
        ]);
    }

    protected function shouldInclude(Route $route): bool
    {
        $uri = trim($route->uri(), '/');
        $backpackPrefix = trim((string) config('backpack.base.route_prefix', 'admin'), '/');

        if (! in_array('GET', $route->methods(), true)) {
            return false;
        }

        if ($route->getName() === 'generated::fallback') {
            return false;
        }

        if ($uri === 'logs') {
            return false;
        }

        if ($uri === 'up') {
            return false;
        }

        if ($uri === 'sitemap.xml') {
            return false;
        }

        if (str_contains($route->uri(), '{')) {
            return false;
        }

        if ($backpackPrefix !== '' && ($uri === $backpackPrefix || str_starts_with($uri, $backpackPrefix.'/'))) {
            return false;
        }

        if ($uri === 'admin' || str_starts_with($uri, 'admin/')) {
            return false;
        }

        return ! ($uri === 'backpack' || str_starts_with($uri, 'backpack/'));
    }
}
