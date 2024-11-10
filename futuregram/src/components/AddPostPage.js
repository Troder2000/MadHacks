// AddPostPage.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

/*
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';

import 'react-datepicker/dist/react-datepicker.css';
*/


function AddPostPage() {
  const backgroundStyle = {
    backgroundImage: 'url("/post.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    //alignItems: 'center',
    justifyContent: 'center',
  };

  const [fileName, setFileName] = useState('');
  const [delay, setDelay] = useState(''); // Delay time in minutes
  const navigate = useNavigate();
  
  /*
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const combinedDateTime = new Date(selectedDate);
  combinedDateTime.setHours(selectedTime.getHours());
  combinedDateTime.setMinutes(selectedTime.getMinutes());
  combinedDateTime.setSeconds(selectedTime.getSeconds());

  */

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
    <div style={backgroundStyle}>
      <div className="add-post-page">
        
        <h2>Create a <span className="app-title">FutureGram</span> Time Capsule!</h2>
        <br />

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleFileChange}
          />
        
          <br />
          <br />

          <input
            type="number"
            style={{width: "42%"}}
            placeholder="Minutes until capsule opens"
            value={delay}
            onChange={handleDelayChange}
            min="0"
            required
          />
        
          {/*
          <br />
          <br />
          <p>When would you like your FutureGram to open?</p>
          
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
          <TimePicker value={selectedTime} onChange={handleTimeChange} />
          <p>Selected date: {combinedDateTime.toString()}</p>
          */}
          
          <button type="submit" style={{width: "10%"}} disabled={!fileName || !delay}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddPostPage;
