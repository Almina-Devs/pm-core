<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'ApiController@login');
Route::post('register', 'ApiController@register');


// needs auth group

Route::group(['middleware' => 'auth.jwt'], function () {

    Route::post('logout', 'ApiController@logout');

    Route::resource('/organizations', 'OrganizationsController');

    Route::resource('/projects', 'ProjectsController');
    
    Route::resource('/lanes', 'LanesController');

    Route::resource('/stories', 'StoriesController');

    Route::resource('/users', 'UsersController');

    Route::get('/boards', 'BoardsController@index');

    Route::put('/passwordreset/{id}', 'ApiController@updatePassword');

});
