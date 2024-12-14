<x-mail::message>
# Hello, {{ $user->name }}

We have seen you have due tasks. What a pity.
Please take a look and come back later

<x-mail::table>
| ID            | Title         | Due Date      |
| ------------- | :-----------: | ------------: |
@foreach ($user->tasks as $task)
| {{ $task->title }} | {{ $task->title }} | {{ $task->due_date }} |
@endforeach
</x-mail::table>

<x-mail::button url="{{ config('app.url') }}">
Go To Website
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
