<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Tests\Utils\TestUtils;

class UserTest extends TestCase
{
    use RefreshDatabase;

    protected $token;

    public function setUp(): void
    {
        parent::setUp();
        $user = TestUtils::createUser();
        $data = [
            'email' => $user->email,
            'password' => TestUtils::getPassword()
        ];
        $response = $this->post('/api/login', $data)
                         ->decodeResponseJson();

        $this->token = $response['token'];
    }

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
        $this->assertNotNull($response['token']);
    }

    
    public function a_logged_in_user_can_see_projects()
    {
        $user = TestUtils::createUser();

        factory('App\Models\Project')->create();

        $this->actingAs($user);

        $response = $this->get(
            '/api/projects', 
            TestUtils::getHeaders($this->token)
        );

        $response->assertStatus(200);
    }

}
