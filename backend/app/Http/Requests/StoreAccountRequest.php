<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class StoreAccountRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'user_id' => 'required|exists:user,id',
            'name' => 'required|string|max:255',
            'type' => 'required|in:business,government,student,educator',
            'account_number' => 'required|string|max:32|unique:vii_accounts,accunt_number',
            'email' => 'required|string|email|max:255|unique:vii_accounts,email',
            'mobile' => 'required|string|max:200',
            'address' => 'required|string|max:500'
        ];
    }
}