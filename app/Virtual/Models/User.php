<?php

namespace App\Virtual\Models;

/**
 * @OA\Schema(
 *     title="User",
 *     description="User model",
 * )
 */
class User
{
    /**
     * @OA\Property(
     *     title="ID",
     *     description="user unique ID",
     *     format="int64",
     *     example=1
     * )
     *
     * @var int
     */
    private $id;

    /**
     * @OA\Property(
     *     title="Name",
     *     description="User name",
     * )
     *
     * @var string
     */
    private $name;

    /**
     * @OA\Property(
     *     title="Email",
     *     description="User email",
     *     format="email",
     * )
     *
     * @var string
     */
    private $email;

    /**
     * @OA\Property(
     *     title="Tasks",
     *     description="Tasks of the User model"
     * )
     *
     * @var \App\Virtual\Models\UserTask[]
     */
    private $tasks;
}
