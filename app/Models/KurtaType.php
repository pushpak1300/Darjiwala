<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class KurtaType extends Model
{
    use Sushi;
    protected $rows = [
            [
            'id' => 1,
            'field_en' => 'FULL SLEEVE NORMAL',
            'field_hi' => 'फुलस्लीव्ज़-न ममल',
            ],
            [
            'id' => 2 ,
            'field_en' => 'FULL SLEEVESHIRTTYPE',
            'field_hi' => 'फुलस्लीव्ज़-शटमटाइप',
            ],
            [
            'id' => 3,
            'field_en' => 'FULL SLEEVE PAN CUT',
            'field_hi' => 'फुलस्लीव्ज़-पानकट'
            ],
            [
            'id' => 4,
            'field_en' => 'HALF SLEEVE',
            'field_hi' => 'हाफ़स्लीव्ज़'
            ],
            [
            'id' => 5,
            'field_en' => 'CHINESE COLLAR',
            'field_hi' => 'गलापट्टी'
            ],
            [
            'id' => 6,
            'field_en' =>  'NORMAL COLLAR',
            'field_hi' =>  'साधागला'
            ],
            [
            'id' => 7,
            'field_en' => 'KALIWALA',
            'field_hi' => 'काकलवाला'
            ],
            [
            'id' => 8,
            'field_en' => 'SABUDANA',
            'field_hi' => 'साबूदाना'
            ],
            [
            'id' => 9,
            'field_en' => 'EMBORIDERY',
            'field_hi' => 'एम्ब्रॉडरी'
            ],
            [
            'id' => 10,
            'field_en' => 'SHAKARPARA',
            'field_hi' => 'शकरपारा'
            ],
            [
            'id' => 11,
            'field_en' => 'NEHRU JACKET',
            'field_hi' => 'नेहरूजैकेट'
            ],
            [
            'id' => 12,
            'field_en' => 'JODHPURI',
            'field_hi' => 'ज धपुरी'
            ],
            [
            'id' => 13,
            'field_en' => 'SHERWANI',
            'field_hi' => 'शेरवानी'
            ]
        
    ]; 
}
/*
[
'id' => 1
'field_en' => 'FULL SLEEVE NORMAL'
'field_hi' => 'फुलस्लीव्ज़-न ममल'
],
[
'id' => 2 
'field_en' => 'FULL SLEEVESHIRTTYPE'
'field_hi' => 'फुलस्लीव्ज़-शटमटाइप'
],
[
'id' => 3
'field_en' => 'FULL SLEEVE PAN CUT'
'field_hi' => 'फुलस्लीव्ज़-पानकट'
],
[
'id' => 4
'field_en' => 'HALF SLEEVE'
'field_hi' => 'हाफ़स्लीव्ज़'
],
[
'id' => 5
'field_en' => 'CHINESE COLLAR'
'field_hi' => 'गलापट्टी'
],
[
'id' => 6
'field_en' =>  'NORMAL COLLAR'
'field_hi' =>  'साधागला'
],
[
'id' => 7
'field_en' => 'KALIWALA'
'field_hi' => 'काकलवाला'
],
[
'id' => 8
'field_en' => 'SABUDANA'
'field_hi' => 'साबूदाना'
],
[
'id' => 9
'field_en' => 'EMBORIDERY'
'field_hi' => 'एम्ब्रॉडरी'
],
[
'id' => 10
'field_en' => 'SHAKARPARA'
'field_hi' => 'शकरपारा'
],
[
'id' => 11
'field_en' => 'NEHRU JACKET'
'field_hi' => 'नेहरूजैकेट'
],
[
'id' => 12
'field_en' => 'JODHPURI'
'field_hi' => 'ज धपुरी'
],
[
'id' => 13
'field_en' => 'SHERWANI'
'field_hi' => 'शेरवानी'
]

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
*/