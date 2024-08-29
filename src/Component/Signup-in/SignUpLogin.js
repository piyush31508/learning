import React, { useState } from 'react';
import './SignUpLogin.css'; // Import the CSS file for styling

const SignUpLogin = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageStyle, setMessageStyle] = useState('');

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (username && email && password) {
      setMessage('Signup successful!');
      setMessageStyle('success');
      // Normally, you would send the data to a server here
      // Example: sendDataToServer({ username, email, password });
    } else {
      setMessage('Please fill in all fields.');
      setMessageStyle('error');
    }
  };

  return (
    <div className={`container mx-auto px-[300px] py-[20px] ${rightPanelActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form className="bg-white pt-5 rounded shadow-md" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-6">Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            className="mb-4 p-2 border rounded w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 border rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form className="bg-white p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-6">Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 border rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border rounded w-full"
          />
          <a href="#" className="text-sm text-blue-600">Forgot your password?</a>
          <button type="submit" className="bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600">Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay bg-gradient-to-r from-red-500 to-pink-500">
          <div className="overlay-panel overlay-left">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-sm mt-4">To keep connected with us please login with your personal info</p>
            <button className="ghost mt-4 bg-white text-red-500 p-2 rounded" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="text-3xl font-bold">Hello, Friend!</h1>
            <p className="text-sm mt-4">Enter your personal details and start your journey with us</p>
            <button className="ghost mt-4 bg-white text-red-500 p-2 rounded" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
