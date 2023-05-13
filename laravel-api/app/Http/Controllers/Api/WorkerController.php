<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\WorkerRequest;
use App\Http\Resources\WorkerDetailResource;
use App\Http\Resources\WorkerResource;
use App\Models\Worker;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return WorkerResource::collection(Worker::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(WorkerRequest $request)
    {
        $fields = $request->validated();
        $worker = new Worker([
            'idPerson' => $fields['Person']['Id'],
            'idSpecialty' => $fields['Specialty']['Id'],
            'Rank' => $fields['Rank'],
            'Employment' => $fields['Employment'],
        ]);
        $worker->save();
        return new WorkerResource($worker);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new WorkerDetailResource(Worker::findOrFail($id));
    }

    public function update(WorkerRequest $request, Worker $worker)
    {
        $fields = $request->validated();
        $worker->update([
            'idPerson' => $fields['Person']['Id'],
            'idSpecialty' => $fields['Specialty']['Id'],
            'Rank' => $fields['Rank'],
            'Employment' => $fields['Employment'],
        ]);
        return new WorkerResource($worker);
    }


    // public function destroy(Worker $worker)
    // {
    //     Worker::destroy($worker->Id);
    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
