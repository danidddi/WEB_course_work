<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DefectRequest;
use App\Http\Resources\DefectResource;
use App\Models\Defect;
use Illuminate\Http\Request;

class DefectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DefectResource::collection(Defect::all());
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(DefectRequest $request)
    {
        $fields = $request->validated();
        $defect = new Defect([
            'Defect' => $fields['Defect']
        ]);
        $defect->save();
        return new DefectResource($defect);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new DefectResource(Defect::findOrFail($id));
    }

    public function update(DefectRequest $request, Defect $defect)
    {
        $defect->update($request->validated());

        return new DefectResource($defect);
    }


    // public function destroy(Defect $defect)
    // {
    //     Defect::destroy($defect->Id);

    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
