import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
