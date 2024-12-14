<?php

namespace App\Virtual;

/**
 * @OA\Schema(
 *      title="Store User request",
 *      description="Store User request body data",
 *      type="object",
 *      required={"name","email","password","password_confirmation"}
 * )
 */

class StoreUserRequest
{
    /**
     * @OA\Property(
     *      title="name",
     *      description="Name of the new User",
     *      example="Jon Doe"
     * )
     *
     * @var string
     */
    public $name;

    /**
     * @OA\Property(
     *      title="email",
     *      description="Email of the User",
     *      example="test@example.com",
     *      format="email"
     * )
     *
     * @var string
     */
    public $email;

    /**
     * @OA\Property(
     *      title="password",
     *      description="Password of the new User",
     *      example="TestPassword"
     * )
     *
     * @var string
     */
    public $password;

    /**
     * @OA\Property(
     *      title="password_confirmation",
     *      description="User model confirmed password",
     *      example="TestPassword"
     * )
     *
     * @var string
     */
    public $password_confirmation;
}