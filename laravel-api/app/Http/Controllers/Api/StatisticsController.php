<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    // select
    // defects.defect,
    // count(idDefect)
    // from defects left join services on  defects.id = services.iddefect
    // group by defects.defect;
    public function statiscticsOfDefects()
    {
    }
}
