import React from 'react';
import Logout from './Logout';
import PostList from './PostList';
import '../App.css';

function HomePage() {
  return (
    <div className="home-page">
      <header className="app-header">
        <h1 className="app-title">FutureGram</h1>
        <div className="logout-section">
          <Logout />
        </div>
      </header>

      <div className="add-post-section">
        <button>Add Post</button>
      </div>

      <div className="post-list-section">
        <h3>FutureGram Posts</h3>
        <PostList />
      </div>
    </div>
  );
}

export default HomePage;
