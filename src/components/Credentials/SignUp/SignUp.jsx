import { React, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up with:", email, password);
  };

  return (
    <div className="signup-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="signup-card">
          <div className="signup-card-header">
            <h2 className="signup-title">Join the Adventure</h2>
            <p className="signup-description">
              Sign up and track your expenses
            </p>
          </div>
          <div className="signup-card-content">
            <form onSubmit={handleSubmit}>
              <div className="signup-form-group">
                <label htmlFor="username" className="signup-label">
                  Username
                </label>
                <input
                  id="username"
                  type="username"
                  placeholder="e.g raj@89647"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="signup-input"
                  required
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="email" className="signup-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="signup-input"
                  required
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="password" className="signup-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="8 digit strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="signup-input"
                  required
                />
              </div>
              <button type="submit" className="signup-button">
                <Sparkles className="signup-icon" />
                Sign Up
              </button>
            </form>
          </div>
          <div className="signup-card-footer">
            <p className="signup-footer-text">
              Already have an account?{" "}
              <Link to="/spendwise/login" className="signup-link">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
