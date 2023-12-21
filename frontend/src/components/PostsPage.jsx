import React from "react";
import OnePost from "./OnePost";
import axios from "axios";
import { useState, useEffect } from "react";

const PostsPage = () => {
  let [posts, setPosts] = useState();

  useEffect(() => {
    if (posts == null) {
      axios.get("/api/posts").then((response) => {
        console.log(response);
        setPosts(response.data.posts);
      });
    }
  });

  return (
    <div>
      <h3>All products from database.</h3>
      {posts == null ? (
        <></>
      ) : (
        posts.map((post) => <OnePost post={post} key={post.id} />)
      )}
    </div>
  );
};

export default PostsPage;
