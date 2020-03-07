<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 255);
            $table->integer('estimate');
            $table->boolean('complete')->default(false);
            $table->integer('owner');
            $table->integer('story_id')->nullable();
            $table->integer('percent_complete')->nullable();
            $table->integer('organization_id');
            $table->dateTime('start')->nullable();
            $table->dateTime('end')->nullable();
            $table->integer('dependencies')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
