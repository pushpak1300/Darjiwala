<?php

namespace App\Nova;

use App\Nova\Metrics\NewOrders;
use App\Nova\Metrics\OrderPerDay;
use App\Nova\Metrics\PendingOrders;
use Codebykyle\CalculatedField\BroadcasterField;
use Codebykyle\CalculatedField\ListenerField;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\HasOne;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Http\Requests\NovaRequest;

class Order extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Order::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

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
        return [
            ID::make(__('ID'), 'id')->sortable(),
            Date::make('Delivery Date')->required(),
            BelongsTo::make('Measurement', 'measurement'),
            BelongsTo::make('FabricType', 'fabric'),
            BelongsTo::make('Kurta Type', 'kurtaType')->nullable()
                ->hideFromIndex(),
            BroadcasterField::make('Kurta Quantity')
                ->broadcastTo('kurta')
                ->hideFromIndex(),
            BroadcasterField::make('Kurta Amount')
                ->broadcastTo('kurta')
                ->hideFromIndex(),
            Number::make('Kurta Total Amount', 'kurta_total')
                ->hideFromIndex(),
            BelongsTo::make('Pyjama Type', 'pyjamaType')->nullable()
                ->hideFromIndex(),
            BroadcasterField::make('Pyjama Quantity')
                ->broadcastTo('pyjama')
                ->hideFromIndex(),
            BroadcasterField::make('Pyjama Amount')
                ->broadcastTo('pyjama')
                ->hideFromIndex(),
            Number::make('Pyjama Total Amount', 'pyjama_total')
                ->hideFromIndex(),
            ListenerField::make('Total Amount', 'total')
                ->listensTo(['pyjama', 'kurta'])
                ->calculateWith(function ($values) {
                    $q1 = $values->get('kurta_quantity');
                    $a1 = $values->get('kurta_amount');
                    $q2 = $values->get('pyjama_quantity');
                    $a2 = $values->get('pyjama_amount');
                    return ($q1 * $a1) + ($q2 * $a2);
                }),
            Number::make('Advance'),
            File::make('Fabric Image')->disk('public'),

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
        return [
            NewOrders::make(),
            OrderPerDay::make(),
            PendingOrders::make()
        ];
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
}
