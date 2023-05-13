<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BrandRequest;
use App\Http\Resources\BrandResource;
use App\Models\Brand;
use Illuminate\Http\Response;

class BrandController extends Controller
{

    public function index()
    {
        return BrandResource::collection(Brand::all());
    }


    public function store(BrandRequest $request)
    {
        $brand = new Brand($request->validated());
        $brand->save();

        return new BrandResource($brand);
    }


    public function show(string $id)
    {
        return new BrandResource(Brand::findOrFail($id));
    }


    public function update(BrandRequest $request, Brand $brand)
    {
        $brand->update($request->validated());

        return new BrandResource($brand);
    }

    // public function destroy(Brand $brand)
    // {
    //     Brand::destroy($brand->Id);

    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
