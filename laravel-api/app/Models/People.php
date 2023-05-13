<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    protected $primaryKey  = 'Id';
    protected $fillable = ['Name', 'BornDate', 'PhoneNumber', 'Registration'];
    public $timestamps = false;
    use HasFactory;
}
