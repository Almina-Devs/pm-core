<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Tests\Utils\TestUtils;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_existing_user_can_login()
    {
        $user = TestUtils::createUser();
        $data = [
            'email' => $user->email,
            'password' => TestUtils::getPassword()
        ];
        $response = $this->post('/api/login', $data);
        $response->assertStatus(200);
    }

    /** @test */
    public function a_logged_in_user_can_see_projects()
    {
        $user = TestUtils::createUser();

        factory('App\Models\Project')->create();

        $this->actingAs($user);

        $response = $this->get('/api/projects');

        dd($response);

        $response->assertStatus(200);

    }

}
