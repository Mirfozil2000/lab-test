import React from 'react';

function BlogPost({ article }) {
  if (!article) {
    return <div>No article available</div>;
  }

  const { title, description, url } = article;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
}

export default BlogPost;