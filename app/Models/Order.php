<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $casts = [
        'delivery_date' => 'date'
    ];

    public function measurement()
    {
        return $this->belongsTo(Measurement::class, 'measurements_id');
    }

    public function fabric()
    {
        return $this->belongsTo(FabricType::class, 'fabric_type');
    }

    public function kurtaType()
    {
        return $this->belongsTo(KurtaType::class, 'kurta_types_id');
    }

    public function pyjamaType()
    {
        return $this->belongsTo(PyjamaType::class, 'pyjama_types_id');
    }
}
