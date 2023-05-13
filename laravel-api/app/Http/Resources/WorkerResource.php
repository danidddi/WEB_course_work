<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'Id' => $this->Id,
            'Person' => $this->Person,
            'Specialty' => $this->Specialty,
            'Rank' => $this->Rank,
            'Employment' => $this->Employment
        ];
    }
}
