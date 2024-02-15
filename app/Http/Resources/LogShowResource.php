<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LogShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // использую ресурсы чтобы ответы были в едином формате
        return [
            'id' => $this->id,
            'message' => $this->message,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
