<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{

    protected $primaryKey  = 'Id';
    protected $fillable = ['idPerson', 'idCar'];
    public $timestamps = false;

    use HasFactory;

    public function Person()
    {
        return $this->belongsTo(People::class, 'idPerson', 'Id');
    }

    public function Car()
    {
        return $this->belongsTo(Car::class, 'idCar', 'Id');
    }

    public function Services()
    {
        return $this->hasMany(Service::class, 'idClient', 'Id');
    }
}
