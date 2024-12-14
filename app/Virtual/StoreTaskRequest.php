<?php

namespace App\Virtual;

/**
 * @OA\Schema(
 *      title="Store Task request",
 *      description="Store Task request body data",
 *      type="object",
 *      required={"title"}
 * )
 */

class StoreTaskRequest
{
    /**
     * @OA\Property(
     *      title="title",
     *      description="Title of the new Task",
     *      example="Go shopping"
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *      title="status",
     *      description="Status of the Task",
     *      enum={"pending", "completed", "stale"},
     * )
     *
     * @var string
     */
    public $status;

    /**
     * @OA\Property(
     *      title="due_date",
     *      description="Due date of the new Task",
     *      example="2024-12-18",
     *      format="date"
     * )
     *
     * @var string
     */
    public $due_date;

    /**
     * @OA\Property(
     *      title="user_id",
     *      description="Task's User model ID",
     *      format="int64",
     *      example=1
     * )
     *
     * @var integer
     */
    public $user_id;
}