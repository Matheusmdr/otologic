<?php

use App\Http\Controllers\ClinicalStaffController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\HomeBannerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\SubExamController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);

Route::get('/nossos-exames', [ExamController::class, 'index']);

Route::get('/nossos-exames/{slug}', [ExamController::class, 'show']);

Route::get('/noticias', [NewsController::class, 'index']);

Route::get('/noticias/{slug}', [NewsController::class, 'show']);


Route::get('/convenios', function () {
    return Inertia::render('convenios');
});

Route::get('/agendamento',  function () {
    return Inertia::render('agendamento');
});

Route::get('/nossa-clinica',  function () {
    return Inertia::render('nossa-clinica');
});


Route::get('/corpo-clinico',  function () {
    return Inertia::render('corpo-clinico');
});

Route::get('/admin', function () {
    return redirect()->route('exam.adminIndex');
})->middleware(['auth', 'verified'])->name('admin');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/news', [NewsController::class, 'adminIndex'])->name('news.adminIndex');
    Route::get('/admin/news/create', [NewsController::class, 'create'])->name('news.create');
    Route::post('/admin/news', [NewsController::class, 'store'])->name('news.store');
    Route::get('/admin/news/edit/{newsId}', [NewsController::class, 'edit'])->name('news.edit');
    Route::put('/admin/news/{newsId}', [NewsController::class, 'update'])->name('news.update');
    Route::delete('/admin/news/delete/{newsId}', [NewsController::class, 'destroy'])->name('news.destroy');
    Route::post('/admin/news/{newsId}/delete-image', [NewsController::class, 'deleteImage'])
        ->name('news.deleteImage');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/exams', [ExamController::class, 'adminIndex'])->name('exam.adminIndex');
    Route::get('/admin/exams/create', [ExamController::class, 'create'])->name('exam.create');
    Route::post('/admin/exams', [ExamController::class, 'store'])->name('exam.store');
    Route::get('/admin/exams/edit/{examId}', [ExamController::class, 'edit'])->name('exam.edit');
    Route::put('/admin/exams/{examId}', [ExamController::class, 'update'])->name('exam.update');
    Route::delete('/admin/exams/delete/{examId}', [ExamController::class, 'destroy'])->name('exam.destroy');
    Route::post('/admin/exams/{examId}/delete-image', [ExamController::class, 'deleteImage'])
        ->name('exam.deleteImage');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/exams/{examId}/subexams', [SubExamController::class, 'adminIndex'])->name('subexam.adminIndex');
    Route::get('/admin/exams/{examId}/create', [SubExamController::class, 'create'])->name('subexam.create');
    Route::post('/admin/exams/{examId}/subexams', [SubExamController::class, 'store'])->name('subexam.store');
    Route::get('/admin/exams/{examId}/subexams/edit/{subexamId}', [SubExamController::class, 'edit'])->name('subexam.edit');
    Route::put('/admin/exams/{examId}/subexams/{subexamId}', [SubExamController::class, 'update'])->name('subexam.update');
    Route::delete('/admin/exams/{examId}/subexams/delete/{subexamId}', [SubExamController::class, 'destroy'])->name('subexam.destroy');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/users', [UserController::class, 'index'])->name('user.index');
    Route::get('/admin/users/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/admin/users', [UserController::class, 'store'])->name('user.store');
    Route::get('/admin/users/edit/{userId}', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/admin/users/{userId}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/admin/users/delete/{userId}', [UserController::class, 'destroy'])->name('user.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/banners', [HomeBannerController::class, 'adminIndex'])->name('banners.adminIndex');
    Route::get('/admin/banners/create', [HomeBannerController::class, 'create'])->name('banners.create');
    Route::post('/admin/banners', [HomeBannerController::class, 'store'])->name('banners.store');
    Route::get('/admin/banners/edit/{bannerId}', [HomeBannerController::class, 'edit'])->name('banners.edit');
    Route::put('/admin/banners/{bannerId}', [HomeBannerController::class, 'update'])->name('banners.update');
    Route::delete('/admin/banners/delete/{bannerId}', [HomeBannerController::class, 'destroy'])->name('banners.destroy');
    Route::post('/admin/banners/{bannerId}/delete-image', [HomeBannerController::class, 'deleteImage'])
        ->name('banners.deleteImage');
});


require __DIR__ . '/auth.php';
