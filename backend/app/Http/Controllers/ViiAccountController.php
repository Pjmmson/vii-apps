<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ViiAccount;

class ViiAccountController extends Controller
{
    /**
     * GET (Read all)
     */
    public function index()
    {
        try {
            $accounts = ViiAccount::all();

            // If database is empty, fall back to temporary mock array
            $data = $accounts->isNotEmpty() ? $accounts : [
                [
                    'id'         => 1,
                    'name'       => 'Mock Account 1',
                    'email'      => 'mock1@vii.com',
                    'created_at' => now()->toDateTimeString(),
                ],
                [
                    'id'         => 2,
                    'name'       => 'Mock Account 2',
                    'email'      => 'mock2@vii.com',
                    'created_at' => now()->toDateTimeString(),
                ]
            ];

            return response()->json([
                'status'  => 'success',
                'message' => 'ViiAccount endpoint is working successfully!',
                'count'   => count($data),
                'data'    => $data,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => 'ViiAccount endpoint failed: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * POST (Create)
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            "vii_acc_name" => "required|string",
        ]);
        $vii_acc_name = ViiAccount::create($validated);
        return response()->json($vii_acc_name, 201);
    }

    /**
     * GET (Read single).
     */
    public function show(string $id)
    {
        return response()->json(ViiAccount::findOrFail($id), 200);
    }

    /**
     * PUT/PATCH (Update)
     */
    public function update(Request $request, string $id)
    {
        $vii_acc_name = ViiAccount::FindOrFail($id);
        $vii_acc_name->update($request->all());
        return response()->json($vii_acc_name, 200);
    }

    /**
     * DELETE (Delete).
     */
    public function destroy(string $id)
    {
        ViiAccount::destroy($id);
        return respone()->json([
            'message' => 'success',
            'data' => null,
        ], 204);
    }
}
