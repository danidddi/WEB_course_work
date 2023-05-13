<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    protected $primaryKey  = 'Id';
    protected $fillable = ['Specialty'];
    public $timestamps = false;
    use HasFactory;
}
