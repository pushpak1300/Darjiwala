<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class PyjamaMeasurementField extends Model
{
    use Sushi;
    protected $rows = [
        [
            'id' => 1,
            'field_en' => 'Length',
            'field_hi' => 'लम्बाई',
        ],
        [
            'id' => 2,
            'field_en' => 'Hip',
            'field_hi' => 'सीट',
        ],
        [
            'id' => 3,
            'field_en' => 'Waist',
            'field_hi' => 'कमर',
        ],
        [
            'id' => 4,
            'field_en' => 'Bottom',
            'field_hi' => 'बॉटम',
        ],
        [
            'id' => 5,
            'field_en' => 'Knees',
            'field_hi' => 'घुटना',
        ],
        [
            'id' => 6,
            'field_en' => 'Calf',
            'field_hi' => 'कपिंडी',
        ],
        [
            'id' => 7,
            'field_en' => 'Inside',
            'field_hi' => 'इन्साइड',
        ],
        [
            'id' => 8,
            'field_en' => 'Thighs',
            'field_hi' => 'जािंघ',
        ],
        [
            'id' => 9,
            'field_en' => 'Miyan',
            'field_hi' => 'कमयानी',
        ]
    ];
}

/*
1 LENGTH लम्बाई
2 HIP सीट कमर बॉटम घुटना कपिंडी इन्साइड
3 WAIST कमर
4 BOTTOM बॉटम
5 KNEES घुटना
6 CALF कपिंडी
7 INSIDE इन्साइड
8 THIGHS जािंघ िं
9 MIYANI कमयानी
*/