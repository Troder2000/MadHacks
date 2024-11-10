// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AddPostPage from './components/AddPostPage';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to Firebase authentication state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once auth check is complete
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading while waiting for auth state
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />} // Redirect to homepage if authenticated
        />
        <Route
          path="/add-post"
          element={user ? <AddPostPage /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
      </Routes>
    </Router>
  );
}

export default App;
