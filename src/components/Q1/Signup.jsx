import React from 'react';

const Signup = () => {
  return (
    <div className="form-container">
      <input type="text" placeholder="Mobile Number or Email" />
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Phone number, username, or email" />
      <input type="password" placeholder="Password" />
      <button className="form-btn">Sign Up</button>
    </div>
  );
};

export default Signup;
