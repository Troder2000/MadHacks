import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function EmailLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error with email login/signup: ", err.message);
    }
  };

  return (
    <form onSubmit={handleEmailAuth}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control mb-2"
      />
      <button type="submit" className="email-login">
        {isNewUser ? 'Sign Up' : 'Login'}
      </button>
      <button
        onClick={() => setIsNewUser(!isNewUser)}
        type="button"
        className="btn btn-link w-100"
      >
        {isNewUser ? 'Already have an account? Login' : 'Create a new account'}
      </button>
    </form>
  );
}

export default EmailLogin;
