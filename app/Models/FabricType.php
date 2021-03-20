<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class FabricType extends Model
{
    use Sushi;

    protected $rows = [
        [
            'id' => 1,
            'type' => 'Cotton',
        ],
        [
            'id' => 2,
            'type' => 'Linen',
        ],
        [
            'id' => 3,
            'type' => 'Silk',
        ],
        [
            'id' => 4,
            'type' => 'Polyster',
        ],
        [
            'id' => 5,
            'type' => 'Khadi',
        ],
    ];
}
