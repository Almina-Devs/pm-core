<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            'name' => 'marc mendoza',
            'email' => '777marc@gmail.com',
            'password' => Hash::make('marc1111'),
            'organization_id' => 1
        ]);

        DB::table('projects')->insert([
            'name' => 'main project',
            'description' => ' a test project',
            'start_date' => '2020-06-01',
            'end_date' => '2020-09-01-01',
            'active' => 1,
            'category_id' => null,
            'organization_id' => 1
        ]);

    }
}
