<?php

use Illuminate\Support\Facades\Route;

Route::get('/api/test-connection', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'Hello from the Laravel Backend API!'
    ]);
});