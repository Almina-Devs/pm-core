<?php

use Illuminate\Database\Seeder;
use App\Models\Organization;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $organization = Organization::first();

        DB::table('users')->insert([
            'name' => 'marc mendoza',
            'email' => '777marc@gmail.com',
            'password' => Hash::make('marc1111'),
            'organization_id' => $organization->id
        ]);
    }
}
