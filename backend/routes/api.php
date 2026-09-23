<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViiAccountController;

Route::get('/test-connection', function () {
    try {
        return response()->json([
            'status' => 'success',
            'message' => 'Laravel backend is connected !!!' 
            ],200);
    } catch (e) {
        return response()->json([
            'error' => 'Database internal error: '. e->getMessage()
        ],500);
    }
    
});

// Vii-accounts
Route::apiResource('/vii_accounts',ViiAccountController::class);