<?php

use Illuminate\Database\Seeder;
use App\Models\Organization;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $organization = Organization::first();

        DB::table('projects')->insert([
            'name' => 'main project',
            'description' => ' a test project',
            'start_date' => '2020-06-01',
            'end_date' => '2020-09-01-01',
            'active' => 1,
            'category_id' => null,
            'organization_id' => $organization->id
        ]);

    }
}
