// HomePage.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import '../App.css';

function HomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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
    navigate('/add-post');
  };

  const calculateRemainingTime = (displayTime) => {
    const currentTime = new Date();
    const displayDate = new Date(displayTime);
    const remainingTime = displayDate - currentTime;

    if (remainingTime > 0) {
      const remainingMinutes = Math.ceil(remainingTime / 60000);
      return `${remainingMinutes} minutes`;
    }
    return 'now';
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
          {posts.map((post, index) => {
            const remainingTimeText = calculateRemainingTime(post.displayTime);

            return (
              <div key={index} className="post-item">
                <p>{post.title}</p>
                {remainingTimeText !== 'now' ? (
                  <p>Post will be available in {remainingTimeText}</p>
                ) : (
                  <img
                    src={require(`../images/${post.fileName}`)} // Adjusted image path
                    alt={post.fileName}
                    className="post-image"
                  />
                
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
