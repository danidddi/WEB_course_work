<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Car extends Model
{
    protected $primaryKey  = 'Id';
    protected $fillable = ['idBrand', 'Model', 'idColor', 'ReleaseYear', 'Plate', 'idOwner'];
    public $timestamps = false;

    use HasFactory;

    public function Brand()
    {
        return $this->belongsTo(Brand::class, 'idBrand', 'Id');
    }

    public function Color()
    {
        return $this->belongsTo(Color::class, 'idColor', 'Id');
    }

    public function Owner()
    {
        return $this->belongsTo(People::class, 'idOwner', 'Id');
    }
}
