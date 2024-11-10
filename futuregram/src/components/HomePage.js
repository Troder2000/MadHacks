// HomePage.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Logout from './Logout';
import '../App.css';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const postSnapshot = await getDocs(postsCollection);
      const postList = postSnapshot.docs.map(doc => doc.data());
      setPosts(postList);
    };

    fetchPosts();
  }, []);

  const handleAddPostClick = () => {
    navigate('/add-post'); // Navigate to Add Post page when clicked
  };

  return (
    <div className="home-page">
      <header className="app-header">
        <h1 className="app-title">FutureGram</h1>
        <Logout />
      </header>

      <div className="add-post-section">
        <button onClick={handleAddPostClick}>Add Post</button>
      </div>

      <div className="post-list-section">
        <h3>FutureGram Posts</h3>
        <div className="post-list">
          {posts.map((post, index) => (
            <div key={index} className="post-item">
              <p>{post.title}</p>
              <img
                src={require(`../images/${post.fileName}`).default} // Path to local image
                alt={post.fileName}
                className="post-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
