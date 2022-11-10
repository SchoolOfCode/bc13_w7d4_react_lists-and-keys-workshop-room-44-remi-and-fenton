import React from "react";

import "./index.css";

function Post({ postId, title, author, date, text, highlights, alt, src }) {
  return (
    <article id="post">
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{author}</p>
      <p>{text}</p>
      <ul>
        {highlights.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <img src={src} alt={alt}></img>
    </article>
  );
}

export default Post;
//highlights={highlights} img={image}
