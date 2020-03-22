<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('login', 'ApiController@login');
Route::post('register', 'ApiController@register');

Route::group(['middleware' => 'auth.jwt'], function () {

    Route::post('logout', 'ApiController@logout');

    Route::resource('/organizations', 'OrganizationsController');

    Route::resource('/projects', 'ProjectsController');
    
    Route::resource('/lanes', 'LanesController');

    Route::resource('/stories', 'StoriesController');

    Route::resource('/tasks', 'TasksController');

    Route::resource('/users', 'UsersController');

    Route::get('/boards', 'BoardsController@index');

    Route::put('/passwordreset/{id}', 'ApiController@updatePassword');

    Route::get('/me', 'ApiController@me');

});
