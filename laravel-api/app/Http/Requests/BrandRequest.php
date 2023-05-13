<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class BrandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules()
    {
        //bail - прекратить выполнение правил валидации для атрибута после первой ошибки
        return [
            'Brand' => 'bail|required|unique:Brands|max:50'
        ];
    }
}
