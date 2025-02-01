<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'body',
        'body_2',
        'cover_image',
        'main_image',
        'slug',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_news');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}