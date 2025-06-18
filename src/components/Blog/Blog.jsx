import React, { useState } from 'react';
import './Blog.css';

const initialPosts = [
  {
    title: 'Mastering React in 2025',
    author: 'Jordan Smith',
    date: 'June 10, 2025',
    content: 'React continues to dominate the frontend world. Learn about hooks, suspense, server components, and more.',
    tags: ['React', 'Frontend', '2025']
  },
  {
    title: 'Design Systems with Tailwind & Figma',
    author: 'Linda Green',
    date: 'June 12, 2025',
    content: 'Design consistency and productivity go hand in hand with Tailwind and Figma integration.',
    tags: ['Design', 'Tailwind', 'Figma']
  },
  {
    title: 'Dark Mode with CSS Variables',
    author: 'Alex Rider',
    date: 'June 15, 2025',
    content: 'Implementing dark mode with CSS variables is clean, scalable, and user-friendly.',
    tags: ['CSS', 'DarkMode', 'UI']
  }
];

const Blog = () => {
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const filteredPosts = initialPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`blog-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="blog-header">
        <h1 className="blog-title">Reactify Blog</h1>
        <div className="blog-controls">
          <input
            type="text"
            placeholder="Search posts..."
            className="blog-search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>

      <div className="blog-posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <h2>{post.title}</h2>
              <p className="meta">By {post.author} on {post.date}</p>
              <p className="excerpt">{post.content}</p>
              <div className="tags">
                {post.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="no-posts">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
