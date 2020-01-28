<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lane;

class LanesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lanes = Lanes::all();

        return response($lanes, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newLane = new Lane();
        $newLane->title = $request->input('title');
        $newLane->label = $request->input('label');
        $newLane->project_id = $request->input('project_id');

        $newLane->save();
        
        if ($newLane) {
            return response()->json([
                'success' => true,
                'lane' => $newLane
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error creating the lane.'
            ], 500);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lane = Lane::where('id', $id)->first();

        return response($lane, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
