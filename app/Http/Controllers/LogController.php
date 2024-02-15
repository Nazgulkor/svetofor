<?php

namespace App\Http\Controllers;


use App\Services\Service;
use Illuminate\Http\Request;

class LogController extends Controller
{
    public function __invoke()
    {
        $logs = (new Service)->index();
        return view('index', compact('logs'));
    }
    public function store(Request $request)
    {
        // с помощью сервиса записываю лог и возвращаю лог
        $log = (new Service)->store($request);
        // передаю лог
        return response()->json($log);
    }
}
