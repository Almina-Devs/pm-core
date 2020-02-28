<?php

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Organization;

class LaneSeeder extends Seeder
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
        
        DB::table('lanes')->insert([
            'title' => 'Planning',
            'label' => '1.0',
            'project_id' => $project->id,
            'organization_id' => $organization->id
        ]);

        DB::table('lanes')->insert([
            'title' => 'Ready for Dev',
            'label' => '1.0',
            'project_id' => $project->id,
            'organization_id' => $organization->id
        ]);

        DB::table('lanes')->insert([
            'title' => 'QA',
            'label' => '1.0',
            'project_id' => $project->id,
            'organization_id' => $organization->id
        ]);

    }
}
