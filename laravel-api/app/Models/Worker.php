<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Worker extends Model
{
    protected $primaryKey  = 'Id';
    protected $fillable = ['idPerson', 'idSpecialty', 'Rank', 'Employment'];
    public $timestamps = false;

    use HasFactory;

    public function Person()
    {
        return $this->belongsTo(People::class, 'idPerson', 'Id');
    }

    public function Specialty()
    {
        return $this->belongsTo(Specialty::class, 'idSpecialty', 'Id');
    }

    public function Services()
    {
        return $this->hasMany(Service::class, 'idWorker', 'Id');
    }
}
