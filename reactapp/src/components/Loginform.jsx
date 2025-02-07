import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import "../styles/login.css";

const LoginForm = ({ closeform }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formType, setFormType] = useState("login"); // "login", "register", "forgot"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || (formType !== "forgot" && !password)) {
      setErrorMessage("Please fill in all fields.");
    } else {
      setErrorMessage("");
      console.log(`Form submitted: ${formType}`, { email, password });
    }
  };

  return (
    <div className="overlay">
      <div className="login-container">
        <button className="close-button" onClick={closeform}>×</button>

        {formType === "login" && (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="login-button">Login</button>
              <div className="form-links">
                <button type="button" onClick={() => setFormType("forgot")}>Forgot Password?</button>
                <button type="button" onClick={() => setFormType("register")}>Create an Account</button>
              </div>
            </form>
          </>
        )}

        {formType === "register" && (
          <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
              </div>
              <button type="submit" className="login-button">Register</button>
              <div className="linkicons">
              <FcGoogle />
              <IoLogoGithub /></div>
              <div className="form-links">
                <button type="button" onClick={() => setFormType("login")}>Back to Login</button>
              </div>
            </form>
          </>
        )}

        {formType === "forgot" && (
          <>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              </div>
              <button type="submit" className="login-button">Reset Password</button>
              <div className="form-links">
                <button type="button" onClick={() => setFormType("login")}>Back to Login</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
