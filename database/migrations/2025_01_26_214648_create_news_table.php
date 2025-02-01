<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->text('description')->nullable(); 
            $table->string('slug')->unique();
            $table->timestamps();
        });


        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); 
            $table->string('title'); 
            $table->text('body')->nullable();
            $table->text('body_2')->nullable();
            $table->string('cover_image')->nullable(); 
            $table->string('main_image')->nullable();
            $table->string('slug')->unique(); 
            $table->timestamps(); 

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });


        Schema::create('category_news', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('news_id');
            $table->unsignedBigInteger('category_id');

            $table->foreign('news_id')->references('id')->on('news')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
        Schema::table('news', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('news');

        Schema::table('category_news', function (Blueprint $table) {
            $table->dropForeign(['news_id']);
            $table->dropForeign(['category_id']);
        });

        Schema::dropIfExists('category_news');
    }
};