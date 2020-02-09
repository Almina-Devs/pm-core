<?php

namespace App\Http\Controllers;

use JWTAuth;
use Illuminate\Http\Request;
use App\Models\Story;

class StoriesController extends Controller
{

    /**
     * Story Controller Construct
     */
    public function __construct() {
        $this->user = JWTAuth::parseToken()->authenticate();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stories = Story::all();
        return response($stories, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newStory = new Story();

        $newStory->title = $request->input('title');
        $newStory->description = $request->input('description');
        $newStory->label = $request->input('label');
        $newStory->draggable = true;
        $newStory->metadata = "[]";
        $newStory->project_id = $request->input('project_id');
        $newStory->lane_id = $request->input('lane_id');
        $newStory->organization_id = $this->user->organization_id;

        $newStory->save();

        if ($newStory) {
            return response()->json([
                'success' => true,
                'stories' => $newStory
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error creating the story.'
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
        $story = Story::where('id', $id)
                      ->where('organization_id', $this->user->organization_id)
                      ->first();

        if ($story) {
            return response()->json([
                'success' => true,
                'story' => $story
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error getting the story.'
            ], 500);
        }
            
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
        $story = Story::where('id', $id)->first();

        $story->title = $request->input('title');
        $story->description = $request->input('description');
        $story->label = $request->input('label');
        $story->draggable = true;
        $story->metadata = "[]";
        $story->project_id = $request->input('project_id');
        $story->lane_id = $request->input('lane_id');
        $story->organization_id = $this->user->organization_id;

        $story->save();

        if ($story) {
            return response()->json([
                'success' => true,
                'stories' => $story
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error updating the story.'
            ], 500);
        }

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
