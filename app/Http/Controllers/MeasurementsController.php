<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Measurement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MeasurementsController extends Controller
{
    public function create(Customer $customer): Response
    {
        return Inertia::render('Measurements/Create',[
           'customer' => $customer
        ]);
    }

    public function store(Request $request,Customer $customer)
    {
        $measurement = Measurement::create($request->all());
        return Inertia::render('Measurements/Create',[
           'measurement' => $measurement
        ]);
    }

    public function show($id)
    {
        //
    }

}
