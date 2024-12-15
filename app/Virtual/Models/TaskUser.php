<?php

namespace App\Virtual\Models;

/**
 * @OA\Schema(
 *     title="Task User",
 *     description="Task User model",
 * )
 */
class TaskUser
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
}
