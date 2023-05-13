<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PeopleRequest;
use App\Http\Resources\PeopleResource;
use App\Models\People;
use Illuminate\Http\Request;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PeopleResource::collection(People::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PeopleRequest $request)
    {
        $fields = $request->validated();
        $people = new People([
            'Name' => $fields['Name'],
            'BornDate' => $fields['BornDate'],
            'PhoneNumber' => $fields['PhoneNumber'],
            'Registration' => $fields['Registration']
        ]);
        $people->save();
        return new PeopleResource($people);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new PeopleResource(People::findOrFail($id));
    }


    public function update(PeopleRequest $request, People $people)
    {
        //  почему-то не передается объект, который нужно обновить
        //  ищем в ручную
        $temp = People::findOrFail($request->Id);
        $temp->update($request->validated());
        return new PeopleResource($temp);

        // $people->update($request->validated());
        // return new PeopleResource($people);
    }


    // public function destroy(People $people)
    // {
    //     People::destroy($people->Id);

    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
