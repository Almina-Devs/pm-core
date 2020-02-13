<?php

namespace App\Http\Controllers;

use JWTAuth;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectsController extends Controller
{
    /**
     * Projects Controller Construct
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
        $projects = Project::all();

        return response($projects, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newProject = new Project();

        $newProject->name = $request->input('name');
        $newProject->description = $request->input('description');
        $newProject->start_date = $request->input('startDate');
        $newProject->end_date = $request->input('endDate');
        $newProject->active = $request->input('active');
        $newProject->organization_id = $this->user->organization_id;

        $newProject->save();

        if ($newProject) {
            return response()->json([
                'success' => true,
                'project' => $newProject
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error creating the project.'
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
        $project = Project::where('id', $id)
                          ->where('organization_id', $this->user->organization_id)
                          ->first();

        if ($project) {
            return response()->json([
                'success' => true,
                'project' => $project
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error getting the project.'
            ], 500);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::where('id', $id)->first();

        $project->name = $request->input('name');
        $project->description = $request->input('description');
        $project->start_date = $request->input('startDate');
        $project->end_date = $request->input('endDate');
        $project->organization_id = $this->user->organization_id;

        $story->save();

        if ($story) {
            return response()->json([
                'success' => true,
                'project' => $project
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error updating the story.'
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
