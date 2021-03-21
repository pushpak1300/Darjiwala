<?php

use App\Http\Controllers\Auth\Nova\LoginController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\MeasurementsController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return
        Inertia::render('Admin/Dashboard');
})->name('admin');

Route::get('/customerprofile', function () {
    return Inertia::render('CustomerProfile/CustomerProfile');
})->name('customerprofile');

Route::get('/order/new', function () {
    return Inertia::render('Order/Index');
})->name('neworder');

Route::get('/customer/create', function () {
    return Inertia::render('Customer/Create');
})->name('newcustomer');

Route::resource('customer',CustomerController::class)->except(['edit','update','destroy']);

Route::get('/customer/{customer}/order/create',[MeasurementsController::class,'create'])->name('order.create');
Route::post('/customer/{customer}/order',[MeasurementsController::class,'store'])->name('order.store');
//
//Route::get('/customer/{customer}/mesurement/{measurement}/order/create',[OrderController::class,'create']);
//Route::post('/customer/{customer}/mesurement/{measurement}/order',[OrderController::class,'store']);

Auth::routes();
