// AddPostPage.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AddPostPage() {
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      // You will need to manually save the file in the src/images folder with this name.
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'posts'), {
        title: new Date().toLocaleString(),
        fileName, // Store the file name in Firebase
      });
      console.log('File name added to Firebase');
      setFileName('');
      navigate('/');
    } catch (error) {
      console.error('Error adding file name to Firebase:', error);
    }
  };

  return (
    <div className="add-post-page">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
        />
        <button type="submit" disabled={!fileName}>Submit</button>
      </form>
    </div>
  );
}

export default AddPostPage;
