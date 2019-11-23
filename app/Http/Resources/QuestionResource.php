<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'path'  => $this->path,
            'body'  => $this->body,
            'created_at' => $this->created_at->diffForHumans(),
            'created_by' => $this->user->name,
            'user_id' => $this->user->id,
            'replies' => ReplyResource::collection($this->replies),
            'total_reply' => $this->replies->count(),
        ];
    }
}
