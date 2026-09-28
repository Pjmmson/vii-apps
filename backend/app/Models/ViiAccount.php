<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illumninate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class ViiAccount extends Authenticatable
{
    //
    use HasFactory, HasApiTokens;

    protected $table = 'vii_accounts';

    protected $fillable = ['user_id','user_number','name','email','mobile','address','password','type','birth_date','status'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function user(): BelongsTo
    {
        return this->belongsTo(User::class);
    }
}
