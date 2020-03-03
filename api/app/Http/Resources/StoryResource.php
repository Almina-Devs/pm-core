<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $response = [
            "id" => $this->id,
            "content" => [
                "id" => $this->id,
                "title" => $this->title,
                "description" => $this->description
            ]
        ];

        return $response;
    }
}
