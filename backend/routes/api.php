<?php
use Illuminate\Support\Facades\Route;

Route::get('/test-connection', function () {
    try {
        return response()->json([
            'status' => 'success',
            'message' => 'Laravel backend is connected !!!' 
            ],200);
    } catch (e) {
        return response->json([
            'error' => 'Database internal error: '. e->getMessage()
        ],500);
    }
    
});