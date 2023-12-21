<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        // return PostResource::collection($posts);
        return new PostCollection($posts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            "title"=>"required|string|max:255",
            "slug"=>"required|string|max:255",
            "body"=>"required",
            "category_id"=>"required",
            "excerpt"=>"required",
        ]);
        // use Illuminate\Support\Facades\Validator;
        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $post = Post::create([
            "title"=>$request->title,
            "slug"=>$request->slug,
            "body"=>$request->body,
            "excerpt"=>$request->excerpt,
            "category_id"=>$request->category_id,
            "user_id"=>$request->user_id
        ]);
        return response()->json(['Post create successfully', new PostResource($post)]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        // $user = Post::find($id);
        // // if($user == null){
        // //     return
        // // }
        // return $user;
        return new PostResource($post);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
