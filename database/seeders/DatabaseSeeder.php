<?php

namespace Database\Seeders;

use App\Enums\SanctumToken;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('testPassword'),
            'is_admin' => true,
        ]);

        $user->createToken(SanctumToken::WEB_APP->value);
    }
}
