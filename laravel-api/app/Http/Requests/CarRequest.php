<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarRequest extends FormRequest
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
            'Brand.Id' => 'bail|required|int',
            'Model' => 'bail|required|max:50',
            'Color.Id' => 'bail|required|int',
            'Plate' => 'bail|required|unique:Cars',
            'ReleaseYear' => 'bail|required|int',
            'Owner.Id' => 'bail|required|int'
        ];
    }
}
