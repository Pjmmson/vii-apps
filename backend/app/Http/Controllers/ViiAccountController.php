namespace App\Http\Controllers;

use App\Models\ViiAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ViiAccountAuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // Query the ViiAccount model
        $account = ViiAccount::where('email', $credentials['email'])->first();

        if (! $account || ! Hash::check($credentials['password'], $account->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Create token specifically for ViiAccount
        $token = $account->createToken('vii_account_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'account' => $account,
        ]);
    }
}