<?php

namespace App\Http\Requests;

use App\Enums\TaskStatus;
use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $statusValues = implode(',', array_column(TaskStatus::cases(), 'value'));

        return [
            'title'     => 'required|string',
            'status'    => 'required|in:'.$statusValues,
            'due_date'  => 'required|date',
            'user_id'   => 'required|exists:users,id',
        ];
    }
}
