<?php

namespace App\Services;

use App\Http\Resources\LogShowResource;
use App\Models\Log;

class Service
{
    public function index()
    {
        return Log::all()->sortDesc();
    }
    public function store($request)
    {
        $log = Log::create(['message' => $request->message]);
        return new LogShowResource($log);
    }
}
