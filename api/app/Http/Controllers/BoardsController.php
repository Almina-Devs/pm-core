<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BoardResource;
use App\Models\Lane;

class BoardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lanes = Lane::all();
        return response(BoardResource::collection($lanes), 200);
    }
}
