<?php

use App\Http\Controllers\RestController;
use Illuminate\Support\Facades\Route;


Route::post('/', [RestController::class, 'index']);

