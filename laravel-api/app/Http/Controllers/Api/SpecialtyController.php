<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SpecialtyRequest;
use App\Http\Resources\SpecialtyResource;
use App\Models\Specialty;
use Illuminate\Http\Request;

class SpecialtyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return SpecialtyResource::collection(Specialty::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SpecialtyRequest $request)
    {
        $specialty = new Specialty($request->validated());
        $specialty->save();

        return new SpecialtyResource($specialty);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new SpecialtyResource(Specialty::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SpecialtyRequest $request, Specialty $specialty)
    {
        $specialty->update($request->validated());

        return new SpecialtyResource($specialty);
    }

    // public function destroy(Specialty $specialty)
    // {
    //     Specialty::destroy($specialty->Id);
    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
