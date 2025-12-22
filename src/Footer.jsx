import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>SkillSwap</h2>
          <p>
            A local skill exchange platform where people teach, learn, and grow
            together.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Platform</h4>
            <ul>
              <li>Browse Skills</li>
              <li>Offer a Skill</li>
              <li>How It Works</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h4>Community</h4>
            <ul>
              <li>Success Stories</li>
              <li>Ratings & Reviews</li>
              <li>Local Providers</li>
              <li>Safety Guidelines</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
