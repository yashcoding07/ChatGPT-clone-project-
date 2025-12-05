import React from "react";
import "../Styles/register.css"

const Register = () => {
  return (
    <div className="register-page">
      <h1>Create Account</h1>

      <form className="register-form">
        <input
          type="text"
          placeholder="Enter your first name"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter your last name"
          className="input-field"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Create a password"
          className="input-field"
        />
        <button className="btn">Register</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
