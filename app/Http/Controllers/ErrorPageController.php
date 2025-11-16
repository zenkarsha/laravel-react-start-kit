<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ErrorPageController extends Controller
{
    public function index()
    {
        return Inertia::render('ErrorPage');
    }
}