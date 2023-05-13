<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'Client.Id' => 'bail|required|int',
            'Worker.Id' => 'bail|required|int|nullable',
            'Defect.Id' => 'bail|required|int',
            'DateAcceptance' => 'bail|date|nullable',
            'DateIssuance' => 'bail|date|nullable',
            'Outlay' => 'bail|required|int',
            'Pay' => 'bail|required|int',
            'Comments' => 'nullable',
        ];
    }
}
