import React from "react";
import "./Login.css";
import Logo from "../Header/devjobsLogo.png";

function Login() {
  const register = () => {};
  const loginToApp = () => {};

  return (
    <div className="login">
      <img src={Logo} alt="devjobs logo" />

      <form>
        <input type="text" placeholder="Full name (required)" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button onClick={loginToApp}>Sign in</button>
      </form>

      <p>
        Not a member ?{" "}
        <span onClick={register} className="login_register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
