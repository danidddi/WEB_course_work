<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Color extends Model
{
    use HasFactory;

    protected $primaryKey  = 'Id';
    protected $fillable = ['Color'];
    public $timestamps = false;

    // автомобили
    public function Cars()
    {
        return $this->hasMany(Car::class, 'idColor', 'Id');
    }
}
