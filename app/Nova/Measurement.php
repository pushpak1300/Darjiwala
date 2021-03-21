<?php

namespace App\Nova;

use App\Models\KurtaMeasurementField;
use App\Models\PyjamaMeasurementField;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use R64\NovaFields\JSON;

use Laravel\Nova\Http\Requests\NovaRequest;

class Measurement extends Resource
{
    public static $displayInNavigation = false;

    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Measurement::class;


    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function fields(Request $request)
    {
        $kurtaFields = KurtaMeasurementField::select('field_en')->get()->pluck('field_en')
            ->map(function ($item, $key) {
                return Number::make($item);
            });

        $pyjamaFields = PyjamaMeasurementField::select('field_en')->get()->pluck('field_en')
            ->map(function ($item, $key) {
                return Number::make($item);
            });
        return [
            ID::make()->sortable(),
            JSON::make('Kurta', $kurtaFields)->fieldClasses('w-full'),
            JSON::make('Pyjama', $pyjamaFields)->fieldClasses('w-full'),
            DateTime::make('Created At')->hideWhenCreating(),

            HasMany::make('Orders')
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }

    public function title()
    {
        return $this->customer->name;
    }
}
