<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class CustomerProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return InertiaResponse
     */
    public function index(): InertiaResponse
    {
        return Inertia::render('CustomerProfile/CustomerProfile', [
            'customer' => Customer::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return InertiaResponse
     */
    public function create(): InertiaResponse
    {
        return Inertia::render('Customer/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $customer = Customer::create(
            $request->validate([
                'name' => ['required', 'max:50'],
                'mobile' => ['required', 'max:50'],
                'age' => ['nullable', 'integer'],
                'address' => ['nullable', 'max:250'],
                'email' => ['nullable', 'max:50', 'email'],
            ])
        );

        return redirect()->route('customer.show', ['customer' => $customer->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param Customer $customer
     * @return Response
     */
    public function show(Customer $customer)
    {
        return Inertia::render('Customer/create',[
            'customer' => $customer
        ]);
    }
//
//    /**
//     * Show the form for editing the specified resource.
//     *
//     * @param Customer $customer
//     * @return Response
//     */
//    public function edit(Customer $customer)
//    {
//        //
//    }
//
//    /**
//     * Update the specified resource in storage.
//     *
//     * @param Request $request
//     * @param Customer $customer
//     * @return Response
//     */
//    public function update(Request $request, Customer $customer)
//    {
//        //
//    }
//
//    /**
//     * Remove the specified resource from storage.
//     *
//     * @param Customer $customer
//     * @return Response
//     */
//    public function destroy(Customer $customer)
//    {
//        //
//    }
}
