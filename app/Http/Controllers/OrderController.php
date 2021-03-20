<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Measurement;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function create(Customer $customer, Measurement $measurement)
    {
        return Inertia::render('Order/Create', [
            'measurement' => $measurement,
            'customer' => $customer
        ]);
    }

    public function store(Customer $customer, Measurement $measurement, Request $request)
    {
        $order = Order::create($request->all());
        return Inertia::render('Order/Create', [
            'measurement' => $measurement,
            'customer' => $customer,
            'order' => $order
        ]);
    }

    public function show(Order $order)
    {
        return Inertia::render('Order/Show', [
            'order' => $order
        ]);
    }
}
