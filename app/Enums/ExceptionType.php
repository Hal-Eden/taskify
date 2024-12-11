<?php

namespace App\Enums;

enum ExceptionType: string
{
    case TASK_NOT_FOUND = 'TASK_NOT_FOUND';
    case USER_NOT_FOUND = 'USER_NOT_FOUND';
}