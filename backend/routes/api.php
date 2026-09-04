use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test-connection',function() {
    return response()->json([
    'status' -> 'success',
    'message' -> 'Laravel backend is connected !!!' 
    ]);
});