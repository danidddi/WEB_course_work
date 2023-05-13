<?php

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CarController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\ColorController;
use App\Http\Controllers\Api\DefectController;
use App\Http\Controllers\Api\PeopleController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SpecialtyController;
use App\Http\Controllers\Api\WorkerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::apiResources([
//     'colors' => ColorController::class,
//     'brands' => BrandController::class,
//     'people' => PeopleController::class,
//     'specialties' => SpecialtyController::class,
//     'defects' => DefectController::class,
//     'cars' => CarController::class,
//     'clients' => ClientController::class,
//     'workers' => WorkerController::class,
//     'services' => ServiceController::class
// ]);

Route::prefix('brands')->group(function () {
    Route::get('/', [BrandController::class, 'index']);
    Route::get('/{brand}', [BrandController::class, 'show']);
    Route::post('/', [BrandController::class, 'store']);
    Route::put('{brand}', [BrandController::class, 'update']);
});

Route::prefix('colors')->group(function () {
    Route::get('/', [ColorController::class, 'index']);
    Route::get('/{color}', [ColorController::class, 'show']);
    Route::post('/', [ColorController::class, 'store']);
    Route::put('/{color}', [ColorController::class, 'update']);
});

Route::prefix('defects')->group(function () {
    Route::get('/', [DefectController::class, 'index']);
    Route::get('/{defect}', [DefectController::class, 'show']);
    Route::post('/', [DefectController::class, 'store']);
    Route::put('{defect}', [DefectController::class, 'update']);
});

Route::prefix('specialties')->group(function () {
    Route::get('/', [SpecialtyController::class, 'index']);
    Route::get('/{specialty}', [SpecialtyController::class, 'show']);
    Route::post('/', [SpecialtyController::class, 'store']);
    Route::put('{specialty}', [SpecialtyController::class, 'update']);
});

Route::prefix('cars')->group(function () {
    Route::get('/', [CarController::class, 'index']);
    Route::get('/{car}', [CarController::class, 'show']);
    Route::post('/', [CarController::class, 'store']);
    Route::put('{car}', [CarController::class, 'update']);
});

Route::prefix('clients')->group(function () {
    Route::get('/', [ClientController::class, 'index']);
    Route::get('/{client}', [ClientController::class, 'show']);
    Route::post('/', [ClientController::class, 'store']);
    Route::put('{client}', [ClientController::class, 'update']);
});

Route::prefix('people')->group(function () {
    Route::get('/', [PeopleController::class, 'index']);
    Route::get('/{people}', [PeopleController::class, 'show']);
    Route::post('/', [PeopleController::class, 'store']);
    Route::put('{people}', [PeopleController::class, 'update']);
});


Route::prefix('workers')->group(function () {
    Route::get('/', [WorkerController::class, 'index']);
    Route::get('/{worker}', [WorkerController::class, 'show']);
    Route::post('/', [WorkerController::class, 'store']);
    Route::put('{worker}', [WorkerController::class, 'update']);
});

Route::prefix('services')->group(function () {
    Route::get('/', [ServiceController::class, 'index']);
    Route::get('/{service}', [ServiceController::class, 'show']);
    Route::post('/', [ServiceController::class, 'store']);
    Route::put('{service}', [ServiceController::class, 'update']);
    Route::put('/closeService/{id}', [ServiceController::class, 'closeService']);
    Route::any('search', [ServiceController::class, 'search']);
});
