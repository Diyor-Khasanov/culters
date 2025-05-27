import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Simulated login logic
    alert(`Logged in with: ${email}`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="left-panel">
          <h1>Welcome Back</h1>
          <p>Login to access your dashboard and manage your account.</p>
        </div>
        <div className="right-panel">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            {error && <div className="error">{error}</div>}

            <Link className="button-login" to="/">
              <button className="button-login" type="submit">Login</button>
            </Link>
          </form>
        </div>
      </div>

      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #74ebd5, #9face6);
          font-family: 'Segoe UI', sans-serif;
        }

        .login-card {
          display: flex;
          width: 800px;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .left-panel {
          flex: 1;
          background: #4a90e2;
          color: white;
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .left-panel h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .left-panel p {
          font-size: 16px;
          opacity: 0.9;
        }

        .right-panel {
          flex: 1;
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .right-panel h2 {
          margin-bottom: 20px;
          font-size: 26px;
          color: #333;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 5px;
          color: #555;
        }

        input {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
        }

        .password-wrapper {
          position: relative;
        }

        .password-wrapper input {
          width: 100%;
        }

        .toggle {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 18px;
        }

        .options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .options a {
          color: #4a90e2;
          text-decoration: none;
        }

        .options a:hover {
          text-decoration: underline;
        }

        .error {
          color: red;
          margin-bottom: 10px;
        }

        .button-login {
          background: #4a90e2;
          color: white;
          border: none;
          padding: 6px;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }

        button:hover {
          background: #357ab8;
        }

        @media (max-width: 768px) {
          .login-card {
            flex-direction: column;
            width: 90%;
          }

          .left-panel, .right-panel {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
