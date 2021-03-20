<?php

namespace App\Nova;

use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Resource as NovaResource;

abstract class Resource extends NovaResource
{

    public static function indexQuery(NovaRequest $request, $query): \Illuminate\Database\Eloquent\Builder
    {
        return $query;
    }

    public static function scoutQuery(NovaRequest $request, $query): \Laravel\Scout\Builder
    {
        return $query;
    }

    public static function detailQuery(NovaRequest $request, $query): \Illuminate\Database\Eloquent\Builder
    {
        return parent::detailQuery($request, $query);
    }

    /**
     * Build a "relatable" query for the given resource.
     *
     * This query determines which instances of the model may be attached to other resources.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public static function relatableQuery(NovaRequest $request, $query)
    {
        return parent::relatableQuery($request, $query);
    }
}
