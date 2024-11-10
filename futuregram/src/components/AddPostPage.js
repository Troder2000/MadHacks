// AddPostPage.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AddPostPage() {
  const [fileName, setFileName] = useState('');
  const [delay, setDelay] = useState(''); // Delay time in minutes
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Calculate the display time based on the delay in minutes
      const currentTime = new Date();
      const displayTime = new Date(currentTime.getTime() + delay * 60000);

      // Save file name, delay, and display time to Firebase
      await addDoc(collection(db, 'posts'), {
        title: currentTime.toLocaleString(),
        fileName,
        delay: `${delay} minutes`, // Store delay in minutes
        displayTime: displayTime.toISOString(),
      });

      console.log('File name and delay added to Firebase');
      setFileName('');
      setDelay('');
      navigate('/');
    } catch (error) {
      console.error('Error adding data to Firebase:', error);
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
        <input
          type="number"
          placeholder="Time before it's visible (in minutes)"
          value={delay}
          onChange={handleDelayChange}
          min="0"
          required
        />
        <button type="submit" disabled={!fileName || !delay}>Submit</button>
      </form>
    </div>
  );
}

export default AddPostPage;
