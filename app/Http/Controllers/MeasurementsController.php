<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\KurtaMeasurementField;
use App\Models\Measurement;
use App\Models\PyjamaMeasurementField;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MeasurementsController extends Controller
{
    public function create(Customer $customer): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'customer' => $customer,
            'kurtaFields' => KurtaMeasurementField::all(),
            'pyjamaFields' => PyjamaMeasurementField::all(),
            'measurements' => $customer->measurements()->latest() ?? null
        ]);
    }

    public function store(Request $request, Customer $customer)
    {
        $measurement = Measurement::create($request->all());
        return Inertia::render('Measurement/Create', [
            'measurement' => $measurement
        ]);
    }

    public function show($id)
    {
        //
    }

}
