import React from 'react';
import './Login.css';

function Login() {
  const loginToApp = () => {};
  const register = () => {};
  return (
    <div className='login'>
      <img
        src='https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.svg'
        alt='Logo'
      />
      <form>
        <input type='text' placeholder='Full name (required if Signing in)' />
        <input type='text' placeholder='Profile pic URL' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member ?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
