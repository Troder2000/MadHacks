import React from 'react';
import GoogleLogin from './GoogleLogin';
import EmailLogin from './EmailLogin';
import '../App.css';

function LoginPage() {
  const backgroundStyle = {
    backgroundImage: 'url("/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div className="login-card">
        <h2 className="title">FutureGram</h2>
        <p className="text-center">Log in with Google or use your email</p>
        <GoogleLogin />
        <hr className="my-4" />
        <EmailLogin />
      </div>
    </div>
  );
}

export default LoginPage;
