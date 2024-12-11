<?php

namespace App\Exceptions;

use App\Enums\ExceptionType;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class TaskNotFoundException extends Exception
{
    public function render(): JsonResponse
    {
        return response()->json(
            [
                'error' => ExceptionType::TASK_NOT_FOUND,
                'message' => __('exceptions.task_not_found'),
            ],
            Response::HTTP_NOT_FOUND
        );
    }
}
