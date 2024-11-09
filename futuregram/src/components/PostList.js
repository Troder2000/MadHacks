import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <h2>Futuregram Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Add your first memory!</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
