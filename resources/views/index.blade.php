<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="main">
            <div class="traffic-light">
                <div class="red item" data-color="red"></div>
                <div class="yellow item" data-color="yellow"></div>
                <div class="green item active" data-color="green"></div>
            </div>
            <button class="bubbly-button">Вперед</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Сообщение</th>
                    <th>Время</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($logs as $log)
                    <tr>
                        <td>{{ $log->message }}</td>
                        <td>{{ $log->created_at }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>

</html>
