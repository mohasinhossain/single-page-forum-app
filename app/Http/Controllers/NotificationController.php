<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }


    public function index(){

        // return auth()->user()->unreadNotifications;
        return[
            'read' => NotificationResource::collection(auth()->user()->readNotifications),
            //'unread' => auth()->user()->unreadNotifications
            'unread' => NotificationResource::collection(auth()->user()->unreadNotifications)
        ];
    }

    public function markAsRead($id){
        auth()->user()->notifications->where('id', $id)->markAsRead();
    }
}
