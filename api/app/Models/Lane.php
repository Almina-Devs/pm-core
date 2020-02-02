<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lane extends Model
{
    public function stories()
    {
        return $this->hasMany('App\Models\Story');
    }    
}
