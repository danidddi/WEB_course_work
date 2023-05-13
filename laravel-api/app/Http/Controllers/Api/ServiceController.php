<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Filters\ServiceFilter;
use Carbon\Carbon;
use Illuminate\Support\Facades\Date;

class ServiceController extends Controller
{
    // public function index(ServiceFilter $filter)
    public function index()
    {
        // return ServiceResource::collection(Service::filter(request('idDefect'))->paginate(request('limit')));
        return ServiceResource::collection(Service::paginate(request('limit')));
    }

    public function search()
    {
        return ServiceResource::collection(Service::all());
    }

    public function store(ServiceRequest $request)
    {
        $fields = $request->validated();
        $service = new Service([
            'idClient' => $fields['Client']['Id'],
            'idWorker' => $fields['Worker']['Id'],
            'idDefect' => $fields['Defect']['Id'],
            'DateAcceptance' => Carbon::now()->toDateString(),
            'DateIssuance' => null,
            'Outlay' => $fields['Outlay'],
            'Pay' => $fields['Pay'],
            'Comments' => $fields['Comments']
        ]);
        $service->save();
        return new ServiceResource($service);
    }


    public function show(string $id)
    {
        return new ServiceResource(Service::findOrFail($id));
    }

    public function update(ServiceRequest $request, Service $service)
    {
        $fields = $request->validated();
        $service->update([
            'idClient' => $fields['Client']['Id'],
            'idWorker' => $fields['Worker']['Id'],
            'idDefect' => $fields['Defect']['Id'],
            'DateAcceptance' => $fields['DateAcceptance'],
            'DateIssuance' => $fields['DateIssuance'],
            'Outlay' => $fields['Outlay'],
            'Pay' => $fields['Pay'],
            'Comments' => $fields['Comments']
        ]);
        return new ServiceResource($service);
    }

    public function closeService(string $id)
    {
        $service = Service::findOrFail($id);
        $service->update([
            'DateIssuance' => Carbon::now()->toDateString(),
        ]);
        return new ServiceResource($service);
    }


    // public function destroy(Service $service)
    // {
    //     Service::destroy($service->Id);
    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
