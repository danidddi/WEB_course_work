<?php

namespace App\Models;

use App\Http\Filters\QueryFilter;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{

    protected $primaryKey  = 'Id';
    protected $fillable = ['idClient', 'idWorker', 'idDefect', 'DateAcceptance', 'DateIssuance', 'Outlay', 'Pay', 'Comments'];
    public $timestamps = false;

    use HasFactory;

    public function Client()
    {
        return $this->belongsTo(Client::class, 'idClient', 'Id');
    }

    public function Worker()
    {
        return $this->belongsTo(Worker::class, 'idWorker', 'Id');
    }

    public function Defect()
    {
        return $this->belongsTo(Defect::class, 'idDefect', 'Id');
    }

    // public function scopeSearch($query, ?string $text)
    // {
    //     return $query->where(function ($query) use ($text) {
    //         $query->where('Client.Car.Brand.Brand', 'like', "%$text%")
    //             ->orWhere('Defect', 'like', "%$text%")
    //             ->orWhere('Name', 'like', "%$text%");
    //     });
    // }

    // public function scopeFilter(Builder $builder, QueryFilter $filter)
    // {
    //     return $filter->apply($builder);
    //     // return Service::where('idDefect', $filter)->get();
    // }
    public function scopeFilter(string $defect, string $brand, string $worker)
    {

        return Service::where('idDefect', $defect)->get();


        // return $filter->apply($builder);
    }
}
