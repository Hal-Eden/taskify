<?php

namespace App\Exceptions;

use App\Enums\ExceptionType;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class UserNotFoundException extends Exception
{
    public function render(): JsonResponse
    {
        return response()->json(
            [
                'error' => ExceptionType::USER_NOT_FOUND,
                'message' => __('exceptions.user_not_found'),
            ],
            Response::HTTP_NOT_FOUND
        );
    }
}
