import React from "react";
import "../Styles/login.css"

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>

      <form className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input-field"
        />

        <button className="btn">Login</button>
      </form>

      <p>
        Don’t have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
