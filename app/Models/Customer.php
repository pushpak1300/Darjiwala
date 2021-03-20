<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    public function measurements()
    {
       return $this->hasMany(Measurement::class,'customers_id');
    }
}
