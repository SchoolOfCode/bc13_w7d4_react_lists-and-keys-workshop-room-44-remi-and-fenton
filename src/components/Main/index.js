import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {samplePosts.map((post) => {
        return (
          <Post
            key={post.postId}
            title={post.title}
            date={post.date}
            author={post.author}
            text={post.text}
            highlights={post.highlights}
            src={post.image.link}
            alt={post.image.alt}
          ></Post>
        );
        {
        }
      })}
    </main>
  );
}

export default Main;
