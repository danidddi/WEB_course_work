<?php

namespace App\Http\Filters;

use App\Http\Filters\QueryFilter;
use App\Models\Car;
use App\Models\Client;

class ServiceFilter extends QueryFilter
{
    public function idDefect($id = null)
    {
        $cars = Car::where('idBrand',$id)->all();
        Client::whereIn('idCar',$cars)
        return $this->builder->when($id, function ($query) use ($id) {
            $query->where('idDefect', $id);
            $query->where('idDefect', $id);
        });
    }
}
