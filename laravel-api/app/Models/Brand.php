<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $primaryKey  = 'Id';

    protected $fillable = ['Brand'];
    public $timestamps = false;


    // автомобили
    public function Cars()
    {
        return $this->hasMany(Car::class, 'idBrand', 'Id');
    }
}
