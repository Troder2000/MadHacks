import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AddPostPage() {
  const backgroundStyle = {
    backgroundImage: 'url("/post.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [fileName, setFileName] = useState('');
  const [delay, setDelay] = useState('');
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
      const currentTime = new Date();
      const displayTime = new Date(currentTime.getTime() + delay * 60000);

      await addDoc(collection(db, 'posts'), {
        title: currentTime.toLocaleString(),
        fileName,
        delay: `${delay} minutes`,
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

  const handleCancel = () => {
    navigate('/'); // Navigate back to homepage
  };

  return (
    <div style={backgroundStyle}>
      <div className="add-post-page" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '2rem', borderRadius: '8px', maxWidth: '400px', textAlign: 'center' }}>
        <h2>Create a <span className="app-title" style={{ color: '#3b82f6' }}>FutureGram</span> Time Capsule!</h2>
        <br />

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ marginBottom: '15px' }}
          />
          <br />

          <input
            type="number"
            style={{ width: "100%", padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
            placeholder="Minutes until capsule opens"
            value={delay}
            onChange={handleDelayChange}
            min="0"
            required
          />
          <br />

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button type="submit" style={{ padding: '10px 20px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} disabled={!fileName || !delay}>
              Submit
            </button>
            <button type="button" onClick={handleCancel} style={{ padding: '10px 20px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#e53e3e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPostPage;
