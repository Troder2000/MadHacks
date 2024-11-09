import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      <h2>Your Futuregram Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Add your first memory!</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.title} - {post.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
