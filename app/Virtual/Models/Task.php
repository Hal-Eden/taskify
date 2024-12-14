<?php

namespace App\Virtual\Models;

/**
 * @OA\Schema(
 *     title="Task",
 *     description="Task model",
 * )
 */
class Task
{
    /**
     * @OA\Property(
     *     title="ID",
     *     description="Task unique ID",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $id;

    /**
     * @OA\Property(
     *     title="Title",
     *     description="Task title",
     * )
     *
     * @var string
     */
    private $title;

    /**
     * @OA\Property(
     *     title="Status",
     *     description="Task status",
     *     enum={"pending", "completed", "stale"},
     * )
     *
     * @var string
     */
    private $status;

    /**
     * @OA\Property(
     *     title="Due Date",
     *     description="Due date of the task",
     *     format="date",
     * )
     *
     * @var string
     */
    private $due_date;

    /**
     * @OA\Property(
     *     title="User",
     *     description="User of the Task model"
     * )
     *
     * @var \App\Virtual\Models\TaskUser
     */
    private $user;
}
