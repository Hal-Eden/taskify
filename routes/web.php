<?php

use Illuminate\Support\Facades\Route;

$wildcard = (app()->environment('local') ? '^(?!api/documentation)' : '') . '.*';

Route::get('{any?}', function () {
    return view('welcome');
})->where('any', $wildcard);
