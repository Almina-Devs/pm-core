<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Project;
use Faker\Generator as Faker;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->sentence,
        'start_date' => $faker->dateTime($max = 'now', $timezone = null),
        'end_date' => $faker->dateTime($max = 'now', $timezone = null),
        'active' => 1,
        'organization_id' => 1
    ];
});
