import React, { useState } from 'react';
import './Blog.css';

const initialPosts = [
  {
    title: 'Mastering React in 2025',
    author: 'Jordan Smith',
    date: '2025-06-10',
    content: 'React continues to dominate the frontend world. Learn about hooks, suspense, server components, and more.',
    tags: ['React', 'Frontend', '2025']
  },
  {
    title: 'Design Systems with Tailwind & Figma',
    author: 'Linda Green',
    date: '2025-06-12',
    content: 'Design consistency and productivity go hand in hand with Tailwind and Figma integration.',
    tags: ['Design', 'Tailwind', 'Figma']
  },
  {
    title: 'Dark Mode with CSS Variables',
    author: 'Alex Rider',
    date: '2025-06-15',
    content: 'Implementing dark mode with CSS variables is clean, scalable, and user-friendly.',
    tags: ['CSS', 'DarkMode', 'UI']
  },
  {
    title: 'State Management in React: Redux vs Zustand',
    author: 'Sara Khan',
    date: '2025-06-20',
    content: 'Explore modern state management solutions including Redux Toolkit and Zustand with code examples.',
    tags: ['React', 'State', 'Zustand', 'Redux']
  },
  {
    title: 'Optimizing Web Performance in 2025',
    author: 'Devon Lee',
    date: '2025-06-22',
    content: 'Learn techniques to improve loading speed, accessibility, and SEO using modern web APIs.',
    tags: ['Performance', 'Web', 'SEO']
  }
];

const Blog = () => {
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');

  const clearSearch = () => {
    setSearch('');
    setSelectedTag('');
  };

  const allTags = [...new Set(initialPosts.flatMap(post => post.tags))];

  const filteredPosts = initialPosts
    .filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedTag ? post.tags.includes(selectedTag) : true)
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={`blog-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="blog-header">
        <h1 className="blog-title">Reactify <span>Blog</span></h1>
        <div className="blog-controls">
          <input
            type="text"
            placeholder="Search posts..."
            className="blog-search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={clearSearch} className="clear-search">Clear</button>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <div className="tag-filter">
          <span>Filter by Tag:</span>
          {allTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
              className={`tag-filter-btn ${tag === selectedTag ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="post-count">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
      </div>

      <div className="blog-posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <h2>{post.title}</h2>
              <p className="meta">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
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
