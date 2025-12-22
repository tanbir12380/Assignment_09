import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

export default function Forget() {
  const { resetYourPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    resetYourPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Reset Link Sent!",
          allowOutsideClick: false,
          text: "Please check your email to reset your password.",
          showConfirmButton: false,
          timer: 2000,
        });
        setEmail(""); 
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message.slice(9),
        });
      });
  };

  return (
    <div className="register-container-pro">
      <div className="register-container">
        <form onSubmit={handleReset} className="register-card">
          <h2 className="register-title">Reset Your Password</h2>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="register-btn forget-btn" type="submit">
            Send Reset Link
          </button>

          <p className="login-link">
            Remember your password? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
