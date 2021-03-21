<?php

namespace App\Providers;

use App\Nova\Metrics\CustomerPerDay;
use App\Nova\Metrics\NewCustomer;
use App\Nova\Metrics\NewOrders;
use App\Nova\Metrics\OrderPerDay;
use App\Nova\Metrics\PendingOrders;
use App\Nova\Metrics\TotalOutstanding;
use App\Nova\Metrics\TotalSales;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Cards\Help;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }

    /**
     * Register the Nova routes.
     *
     * @return void
     */
    protected function routes()
    {
        Nova::routes()
                ->withAuthenticationRoutes()
                ->withPasswordResetRoutes()
                ->register();
    }

    /**
     * Register the Nova gate.
     *
     * This gate determines who can access Nova in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            return in_array($user->email, [
                //
            ]);
        });
    }

    /**
     * Get the cards that should be displayed on the default Nova dashboard.
     *
     * @return array
     */
    protected function cards()
    {
        return [
            CustomerPerDay::make()->width('1/2')->canSee(function (){
                return request()->user()->hasPermissionTo('view-configure-resource');
            }),
            NewCustomer::make()->width('1/2')->canSee(function (){
                return request()->user()->hasPermissionTo('view-configure-resource');
            }),
            TotalSales::make()->width('1/2')->canSee(function (){
                return request()->user()->hasPermissionTo('view-configure-resource');
            }),
            TotalOutstanding::make()->width('1/2')->canSee(function (){
                return request()->user()->hasPermissionTo('view-configure-resource');
            }),
            OrderPerDay::make()->canSee(function (){
                return request()->user()->hasPermissionTo('view-configure-resource');
            }),
            PendingOrders::make(),
            NewOrders::make(),
        ];
    }

    /**
     * Get the extra dashboards that should be displayed on the Nova dashboard.
     *
     * @return array
     */
    protected function dashboards()
    {
        return [];
    }

    /**
     * Get the tools that should be listed in the Nova sidebar.
     *
     * @return array
     */
    public function tools()
    {
        return [
            \Vyuldashev\NovaPermission\NovaPermissionTool::make()->canSee(function (){
                return request()->user()->hasPermissionTo('view-configure-resource');
            }),
        ];
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
