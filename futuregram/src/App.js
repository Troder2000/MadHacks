import logo from './logo.svg';
import React, { useState } from 'react';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <h1>Futuregram</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
