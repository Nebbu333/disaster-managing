import React from "react";
import "./Login.css";
const Login = () => (
  <div className="page">
    <h1>Login</h1>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default Login;
