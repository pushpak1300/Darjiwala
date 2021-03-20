<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class KurtaMeasurementField extends Model
{
    use Sushi;
    protected $rows = [
        [
            'id' => 1,
            'field_en' => 'Length',
            'field_hi' => 'लम्बाई',
        ],
    ];
}
