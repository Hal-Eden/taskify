<?php

namespace App\Virtual;

class AuthController
{
    /**
     * @OA\Post(
     *      path="/api/login",
     *      operationId="userLogin",
     *      tags={"Auth"},
     *      summary="Login User",
     *      description="Login User",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"email", "password"},
     *              @OA\Property(property="email", type="string", format="email", example="user@example.com"),
     *              @OA\Property(property="password", type="string", format="password", example="testPassword")
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful login",
     *          @OA\JsonContent(
     *              @OA\Property(property="token", type="string", example="49|CkP6Mw1LGxvE9NwfrwZIEEk0oVMWdQMLECHpcgATdb251360"),
     *              @OA\Property(property="message", type="string", example="Login Successful")
     *          )
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized"
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Unprocessable Content"
     *      )
     *     )
     */
    public function login() {}

    /**
     * @OA\Post(
     *      path="/api/register",
     *      operationId="userRegister",
     *      tags={"Auth"},
     *      summary="User Register",
     *      description="Register User",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"email", "name", "password", "password_confirmation"},
     *              @OA\Property(property="name", type="string", example="Jon Doe"),
     *              @OA\Property(property="email", type="string", format="email", example="user@example.com"),
     *              @OA\Property(property="password", type="string", format="password", example="testPassword"),
     *              @OA\Property(property="password_confirmation", type="string", format="password", example="testPassword")
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful Registration",
     *          @OA\JsonContent(
     *              @OA\Property(property="token", type="string"),
     *              @OA\Property(property="message", type="string")
     *          )
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized"
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Unprocessable Content"
     *      )
     *     )
     */
    public function register() {}

    /**
     * @OA\Get(
     *     path="/sanctum/csrf-cookie",
     *     summary="Get CSRF Token",
     *     operationId="getCsrfToken",
     *     tags={"Auth"},
     *     description="This route sets the CSRF token for subsequent requests",
     *     @OA\Response(
     *         response=200,
     *         description="CSRF token set",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="CSRF token set")
     *         )
     *     )
     * )
     */
    public function getCsrf() {}
}
