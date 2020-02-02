<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    public function lanes()
    {
        return $this->belongsTo('App\Models\Lane', 'lane_id');
    }
}
