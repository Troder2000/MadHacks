import React from 'react';
import GoogleLogin from './GoogleLogin';
import EmailLogin from './EmailLogin';
import '../App.css';

function LoginPage() {
  return (
    <div className="login-background">
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
