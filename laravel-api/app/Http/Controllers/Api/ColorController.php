<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ColorRequest;
use App\Http\Resources\ColorResource;
use App\Models\Brand;
use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ColorController extends Controller
{

    public function index()
    {
        return ColorResource::collection(Color::all());
    }


    public function store(ColorRequest $request)
    {
        $color = new Color($request->validated());
        $color->save();
        return new ColorResource($color);
    }


    public function show(string $id)
    {
        return new ColorResource(Color::findOrFail($id));
    }


    public function update(ColorRequest $request, Color $color)
    {
        $color->update($request->validated());

        return new ColorResource($color);
    }


    // public function destroy(Color $color)
    // {
    //     Color::destroy($color->Id);

    //     return response(null, Response::HTTP_NO_CONTENT);
    // }
}
