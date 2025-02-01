<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Str;

class NewsController extends Controller
{

    public function index()
    {
        $news = News::orderBy('created_at', 'desc')->paginate(6);
        return Inertia::render('noticias/index', [
            'news' => $news,
        ]);
    }

    public function adminIndex()
    {
        $news = News::with('categories')->orderBy('created_at', 'desc')->get();
        return Inertia::render('admin/news/index', [
            'news' => $news,
        ]);
    }


    public function show($slug)
    {
        $news = News::where('slug', $slug)->firstOrFail();
        return Inertia::render('noticias/noticia/index', [
            'news' => $news,
        ]);
    }


    public function create()
    {
        return Inertia::render('admin/news/create');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'nullable|string',
            'body_2' => 'required',
            'cover_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'main_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id' => 'array',
            'user_id' => 'required',
        ]);

        if (empty($validated['body'])) {
            $validated['body'] = '';
        }

        if ($request->hasFile('cover_image')) {
            $coverImagePath = $request->file('cover_image')->store('cover_images', 'public');
            $coverImageUrl = '/storage/' . $coverImagePath;
            $validated['cover_image'] = $coverImageUrl;
        }

        if ($request->hasFile('main_image')) {
            $mainImagePath = $request->file('main_image')->store('main_images', 'public');
            $mainImageUrl = '/storage/' . $mainImagePath;
            $validated['main_image'] = $mainImageUrl;
        }

        $validated['slug'] = Str::slug($validated['title']);


        News::create($validated);

        return redirect()->route('news.adminIndex')
            ->with('success', 'News created successfully.');
    }


    public function edit($newsId)
    {
        $news = News::find($newsId);
        return Inertia::render('admin/news/edit', [
            'news' => $news,
        ]);
    }


    public function update(Request $request, $newsId)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'nullable|string',
            'body_2' => 'required',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'main_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id' => 'array',
        ]);

        if (empty($validated['body'])) {
            $validated['body'] = '';
        }

        $news = News::findOrFail($newsId);

        if ($request->hasFile('cover_image')) {
            if ($news->cover_image) {
                $oldCoverImagePath = str_replace('storage/', '', $news->cover_image);
                if (Storage::disk('public')->exists($oldCoverImagePath)) {
                    Storage::disk('public')->delete($oldCoverImagePath);
                }
            }
            $coverImagePath = $request->file('cover_image')->store('cover_images', 'public');
            $news->cover_image = '/storage/' . $coverImagePath;
        }

        if ($request->hasFile('main_image')) {
            if ($news->main_image) {
                $oldMainImagePath = str_replace('storage/', '', $news->main_image);
                if (Storage::disk('public')->exists($oldMainImagePath)) {
                    Storage::disk('public')->delete($oldMainImagePath);
                }
            }
            $mainImagePath = $request->file('main_image')->store('main_images', 'public');
            $news->main_image = '/storage/' . $mainImagePath;
        }

        $news->slug = Str::slug($request->input('title'));
        $news->title = $request->input('title');
        $news->body = $request->input('body');
        $news->body_2 = $request->input('body_2');
        $news->categories()->sync($request->category_id);
        $news->save();

        return redirect()->back()->with('success', 'News updated successfully.');
    }

    public function deleteImage(Request $request, $newsId)
    {
        $request->validate([
            'image_type' => 'required|in:cover_image,main_image',
        ]);

        $news = News::findOrFail($newsId);

        if ($request->input('image_type') === 'cover_image') {
            if ($news->cover_image) {
                $coverImagePath = str_replace('storage/', '', $news->cover_image);
                Storage::disk('public')->delete($coverImagePath);

                $news->cover_image = null;
            }
        } elseif ($request->input('image_type') === 'main_image') {
            if ($news->main_image) {
                $mainImagePath = str_replace('storage/', '', $news->main_image);
                Storage::disk('public')->delete($mainImagePath);

                $news->main_image = null;
            }
        }

        $news->save();

        return redirect()->back()->with('success', 'Image deleted successfully.');
    }

    public function destroy($newsId)
    {
        $news = News::findOrFail($newsId);

        if ($news->cover_image) {
            $coverImagePath = str_replace('storage/', '', $news->cover_image);
            Storage::disk('public')->delete($coverImagePath);
        }

        if ($news->main_image) {
            $mainImagePath = str_replace('storage/', '', $news->main_image);
            Storage::disk('public')->delete($mainImagePath);
        }

        $news->delete();

        return redirect()->route('news.adminIndex')
            ->with('success', 'News deleted successfully.');
    }
}
