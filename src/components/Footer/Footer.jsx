import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      className="footer-bg footer-text footer-padding"
      style={{ bottom: "0", position: "fixed", width: "100%" }}
    >
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-title">SpendWise</h3>
            <p className="footer-description">
              Now simplify your finances easily.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/features" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-icons">
              <a href="#" aria-label="Facebook" className="footer-icon">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" className="footer-icon">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram" className="footer-icon">
                <Instagram />
              </a>
              <a
                href="mailto:info@expensecalc.com"
                aria-label="Email"
                className="footer-icon"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} SpendWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
