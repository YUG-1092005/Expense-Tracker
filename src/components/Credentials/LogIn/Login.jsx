import { React, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
  };

  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-card">
          <div className="login-card-header">
            <h2 className="login-title">Login to Spendwise</h2>
            <p className="login-description">
               Check your expenses easily
            </p>
          </div>
          <div className="login-card-content">
            <form onSubmit={handleSubmit}>
              <div className="login-form-group">
                <label htmlFor="email" className="login-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  required
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="password" className="login-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="8 digit strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  required
                />
              </div>
              <button type="submit" className="login-button">
                <Sparkles className="login-icon" />
                Login
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
