// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddPostPage from './components/AddPostPage'; // New component for adding posts

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-post" element={<AddPostPage />} /> {/* New route for Add Post */}
      </Routes>
    </Router>
  );
}

export default App;
