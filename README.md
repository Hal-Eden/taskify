## Project Taskify

Simple and minimalistic dashboard for task management

## 🛠 Setup

1. Initial setup
    1. `npm ci`
    2. `composer install`
    3. `cp .env.example .env`
    4. `php artisan key:generate`
    5. `touch database/database.sqlite` (optional) Mysql
    6. `php artisan migrate`
    7. `php artisan schedule:work` (optional) for testing cron jobs locally

2. Run seeders to create a default Admin user
    1. `php artisan db:seed`

Default Admin credentials
`email: test@example.com`
`password: testPassword`

## API

##### Swagger UI route
`/api/documentation`

##### Swagger docs generation
`php artisan l5-swagger:generate`

##### Swagger docs path
`/storage/api-docs/api-docs.json`

> **Note:** API docs are already pregenerated

> **Note:** In local environment `/api/documentation` route is available for Swagger UI including all API routes. But it doesn't work with Laravel Sanctum. To test API routes we can just import Swagger docs in any API testing application (e.g. Postman)

## SEARCH

Currently there are 2 searchable Models. 
* `User` - `name`, `email`
* `Task` - `title`

## TASKS

Tasks have 3 main states.
* `Pending` - Initial state when Task is created and ongoing
* `Completed` - Task is completed/done
* `Stale` - Task is on hold. `Stale` tasks are not considered when notifying users about due Tasks

## EMAIL NOTIFICATIONS

There is a scheduled job to run every day. The Job checks for users tasks and sends users notifications of `Pending` due tasks.

The job can be run manually:
`php artisan tasks:notify`
