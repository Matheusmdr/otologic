<?php

namespace App\Http\Controllers;

use App\Models\HomeBanners;
use App\Models\News;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    $news = News::latest()->take(3)->get();
    $banners = HomeBanners::orderBy('order', 'asc')->get() ?: [];

    return Inertia::render('index', [
      'news' => $news,
      'banners' => $banners
    ]);
  }
}
