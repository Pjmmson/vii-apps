<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vii_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignID('user_id')->contrained()->onDelete('cacades');
            $table->string('account_number',32)->unique();
            $table->string('name');
            $table->enum('type',['business','government','student','educator']);
            $table->enum('status',['active','suspended','closed'])->default('active');
            $table->string('email')->unique();
            $table->string('mobile');
            $table->text('address')->nullable();
            $table->string('password');
            $table->date('birth_date')->nullable();
            $table->rememberToken();
            $table->string('acc_permission');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vii_accounts');
    }
};
