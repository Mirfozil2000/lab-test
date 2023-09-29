// src/pages/Blog.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeslaNews } from '../store/actions/blogActions';
import './Blog.css'; 

function Blog() {
  const dispatch = useDispatch();
  const { teslaNews, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchTeslaNews());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!teslaNews || !teslaNews.articles) {
    return <div>No articles available</div>;
  }

  return (
    <div className="blog-container">
      <h2>Tesla News</h2>
      {teslaNews.articles.map((article) => (
        <div className="blog-post" key={article.publishedAt}>
          <h3 className="blog-title">{article.title}</h3>
          <p className="blog-description">{article.description}</p>
          <a
            className="blog-link"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blog;
