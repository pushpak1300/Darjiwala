<?php

namespace App\Nova\Metrics;

use App\Models\Order;
use Carbon\Carbon;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Partition;

class PendingOrders extends Partition
{
    /**
     * Calculate the value of the metric.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return mixed
     */
    public function calculate(NovaRequest $request)
    {
        return $this->result([
            'Completed' => Order::whereDate('delivery_date','<',Carbon::today())->count(),
            'Pending' => Order::whereDate('delivery_date','>',Carbon::today())->count(),
        ]);
    }

    /**
     * Determine for how many minutes the metric should be cached.
     *
     * @return  \DateTimeInterface|\DateInterval|float|int
     */
    public function cacheFor()
    {
        // return now()->addMinutes(5);
    }

    /**
     * Get the URI key for the metric.
     *
     * @return string
     */
    public function uriKey()
    {
        return 'pending-orders';
    }
}
