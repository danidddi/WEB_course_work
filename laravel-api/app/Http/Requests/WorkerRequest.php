<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkerRequest extends FormRequest
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
            'Person.Id' => 'bail|required|int',
            'Specialty.Id' => 'bail|required|int',
            'Rank' => 'bail|required|max:50',
            'Employment' => 'bail|required|date',
        ];
    }
}
