import React from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function GoogleLogin() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google login successful");
    } catch (error) {
      console.error("Error with Google login: ", error.message);
    }
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
}

export default GoogleLogin;
