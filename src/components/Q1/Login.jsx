import React from 'react'

const Login = () => {
  return (
    <div className="form-container">
      <input type="text" placeholder="Phone number, username, or email" />
      <input type="password" placeholder="Password" />
      <button className="form-btn">Sign In</button>
    </div>
  );
};

export default Login;
