import React from 'react';

import './index.css';

function Post({postId, title, author, date, text, highlights, image}) {
  return <article key={postId} title={title} date={date} author={author} text={text} highlights={highlights} img={image}></article>;
}

export default Post;
