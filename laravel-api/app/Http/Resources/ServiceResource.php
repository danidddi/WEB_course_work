<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
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
            'Client' => new ClientResource($this->Client),
            'Worker' => new WorkerResource($this->Worker),
            'Defect' => $this->Defect,
            'DateAcceptance' => $this->DateAcceptance,
            'DateIssuance' => $this->DateIssuance,
            'Outlay' => $this->Outlay,
            'Pay' => $this->Pay,
            'Comments' => $this->Comments
        ];
    }
}
