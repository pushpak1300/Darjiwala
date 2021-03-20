<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class PyjamaType extends Model
{
    use Sushi;
    protected $rows = [
            [
            'id' => 1,
            'field_en' => 'PANT TYPE',
            'field_hi' => 'पैंटटाइप'
            ],
            [
            'id' => 2,
            'field_en' => 'NADIWALA',
            'field_hi' => 'नाकडवाला'
            ],
            [
            'id' => 3,
            'field_en' => 'NP',
            'field_hi' => '*NA'
            ],
            [
            'id' => 4,
            'field_en' => 'NCP',
            'field_hi' => '*NA'
            ],
            [
            'id' => 5,
            'field_en' => 'NBP',
            'field_hi' => '*NA'
            ],
            [
            'id' => 6,
            'field_en' => 'ELASTIC',
            'field_hi' => 'इलाखिक'
            ],
            [
            'id' => 7,
            'field_en' => 'ECP',
            'field_hi' => 'NA'
            ],
            [
            'id' => 8,
            'field_en' => 'EBC',
            'field_hi' => 'NA'
            ],
            [
            'id' => 9,
            'field_en' => 'ELASTIC+NADIWALA',
            'field_hi' => 'इलाखिक+ नाकडवाला'
            ],
            [
            'id' => 10 ,
            'field_en' => 'CHUDIDAR',
            'field_hi' => 'चूडीदार'
            ],
            [
            'id' => 11 ,
            'field_en' => 'ALIGADI',
            'field_hi' => 'अलीगडी'
            ],
            [
            'id' => 12 ,
            'field_en' => 'DHOTI',
            'field_hi' => 'ध ती'
            ],
            [
            'id' => 13 ,
            'field_en' => 'PATIALA',
            'field_hi' => 'पकटयाला'
            ] 
        ]; 
}
