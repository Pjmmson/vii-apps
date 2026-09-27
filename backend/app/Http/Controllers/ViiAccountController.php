<?php

namespace App\Http\Controllers;

use App\Models\ViiAccount;
use App\Http\Requests\StoreAccountRequest;
use App\Http\Requests\UpdateAccountRequest;
use App\Http\Resources\AccountResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AccountController extends Controller
{
    /**
     * READ (List all accounts)
     * GET /api/accounts
     */
    public function index(): AnonymousResourceCollection
    {
        $accounts = ViiAccount::latest()->paginate(10);
        return AccountResource::collection($accounts);
    }

    /**
     * CREATE (Store new account)
     * POST /api/accounts
     */
    public function store(StoreAccountRequest $request): JsonResponse
    {
        $account = ViiAccount::create($request->validated());

        return (new AccountResource($account))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * READ (Show single account)
     * GET /api/accounts/{account}
     */
    public function show(ViiAccount $account): AccountResource
    {
        return new AccountResource($account);
    }

    /**
     * UPDATE (Update existing account)
     * PUT/PATCH /api/accounts/{account}
     */
    public function update(UpdateAccountRequest $request, Account $account): AccountResource
    {
        $account->update($request->validated());

        return new AccountResource($account);
    }

    /**
     * DELETE (Remove account)
     * DELETE /api/accounts/{account}
     */
    public function destroy(ViiAccount $account): JsonResponse
    {
        $account->delete();

        return response()->json([
            'message' => 'Account deleted successfully.'
        ], 200);
    }
}