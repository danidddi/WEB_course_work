<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClientRequest;
use App\Http\Resources\ClientDetailResource;
use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ClientResource::collection(Client::all());
        // return ClientResource::collection(Client::with('Cars')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClientRequest $request)
    {
        $fields = $request->validated();
        $client = new Client([
            'idPerson' => $fields['Person']['Id'],
            'idCar' => $fields['Car']['Id']
        ]);
        $client->save();
        return new ClientResource($client);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new ClientDetailResource(Client::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ClientRequest $request, Client $client)
    {
        $fields = $request->validated();
        $client->update([
            'idPerson' => $fields['Person']['Id'],
            'idCar' => $fields['Car']['Id']
        ]);
        return new ClientResource($client);
    }


    // public function destroy(Client $client)
    // {
    //     Client::destroy($client->Id);
    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
