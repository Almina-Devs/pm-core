<?php

namespace Tests\Utils;

use Tests\TestCase;

class TestUtils
{
    protected static $userPassword = 'test1234';

    public static function createUser()
    {
        $user = factory('App\User')->create([
            'password' => bcrypt(self::$userPassword)
        ]);
        return $user;
    }

    public static function getPassword()
    {
        return self::$userPassword;
    }

    public static function getHeaders($token)
    {
        $headers = ['Accept' => 'application/json'];
        $headers['Authorization'] = 'Bearer '. $token;
        return $headers;
    }

}