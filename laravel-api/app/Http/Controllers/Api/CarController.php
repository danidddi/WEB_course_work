<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CarRequest;
use App\Http\Resources\CarResource;
use App\Models\Car;
use Illuminate\Http\Response;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CarResource::collection(Car::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CarRequest $request)
    {
        $fields = $request->validated();
        $car = new Car([
            'idBrand' => $fields['Brand']['Id'],
            'Model' => $fields['Model'],
            'idColor' => $fields['Color']['Id'],
            'Plate' => $fields['Plate'],
            'ReleaseYear' => $fields['ReleaseYear'],
            'idOwner' => $fields['Owner']['Id']
        ]);
        $car->save();
        return new CarResource($car);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new CarResource(Car::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CarRequest $request, Car $car)
    {
        $fields = $request->validated();

        $car->update([
            'idBrand' => $fields['Brand']['Id'],
            'Model' => $fields['Model'],
            'idColor' => $fields['Color']['Id'],
            'Plate' => $fields['Plate'],
            'ReleaseYear' => $fields['ReleaseYear'],
            'idOwner' => $fields['Owner']['Id']
        ]);

        return new CarResource($car);
    }


    // public function destroy(Car $car)
    // {
    //     Car::destroy($car->Id);

    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
