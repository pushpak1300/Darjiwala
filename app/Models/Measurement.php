<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Measurement extends Model
{
    use HasFactory;

    protected $casts = [
        'kurta' => AsArrayObject::class,
        'pyjama' => AsArrayObject::class
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class,'customers_id');
    }

    public function orders()
    {
        return $this->hasMany(Order::class,'measurements_id');
    }
}
