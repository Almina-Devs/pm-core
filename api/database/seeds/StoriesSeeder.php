<?php

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Organization;

class StoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $project = Project::first();
        $organization = Organization::first();

        DB::table('stories')->insert([
            'title' => 'Set up webpack',
            'description' => 'initial wiring',
            'label' => '1.0',
            'draggable' => 1,
            'lane_id' => 1,
            'organization_id' => $project->id
        ]);

        DB::table('stories')->insert([
            'title' => 'Set up packages',
            'description' => 'imports',
            'label' => '1.0',
            'draggable' => 1,
            'lane_id' => 1,
            'organization_id' => $project->id
        ]);

    }
}
