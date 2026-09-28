<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViiAccountController;
use App\Http\Controllers\AuthController;
// Public Route
Route::post('/account/login', [AuthController::class, 'login']);

// Protected Route
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/account/me', function (Request $request) {
        // Returns the authenticated ViiAccount instance automatically
        return response()->json($request->user());
    });
});

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
// Route::apiResource('/vii_accounts',ViiAccountController::class);
Route::get('/vii-accounts', [ViiAccountController::class, 'index']);
Route::post('/vii-accounts', [ViiAccountController::class, 'store']);
Route::get('/vii-accounts/{id}', [ViiAccountController::class, 'show']);
Route::put('/vii-accounts/{id}', [ViiAccountController::class, 'update']);
Route::delete('/vii-accounts/{id}', [ViiAccountController::class, 'destroy']);