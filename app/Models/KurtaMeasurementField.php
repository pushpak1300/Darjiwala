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
        [
            'id' => 2,
            'field_en' => 'Shoulder',
            'field_hi' => 'कन्धा',
        ],
        [
            'id' => 3,
            'field_en' => 'Chest',
            'field_hi' => 'छाती',
        ],
        [
            'id' => 4,
            'field_en' => 'Stomach',
            'field_hi' => 'पेट',
        ],
        [
            'id' => 5,
            'field_en' => 'Sleeves',
            'field_hi' => 'बाहे',
        ],
        [
            'id' => 6,
            'field_en' => 'Neck',
            'field_hi' => 'गला',
        ],
        [
            'id' => 7,
            'field_en' => 'Arm Hole',
            'field_hi' => 'बुककया',
        ],
        [
            'id' => 8,
            'field_en' => 'Width',
            'field_hi' => 'घेर',
        ],
        [
            'id' => 9,
            'field_en' => 'Sleeve Hole',
            'field_hi' => 'मुरी',
        ],
        [
            'id' => 10,
            'field_en' => 'Hip',
            'field_hi' => 'सीट',
        ],
        [
            'id' => 11,
            'field_en' => 'Breast',
            'field_hi' => 'खिडक',
        ]

    ];
}
/*
1 LENGTH लम्बाई
2 SHOULDER कन्धा
3 CHEST छाती
4 STOMACH पेट
5 SLEEVES बाहे
6 NECK गला
7 ARM HOLE बुककया
8 WIDTH घेर
9 SLEEVE
HOLE
मुरी
10 HIP सीट
11 BREAST खिडक
*/