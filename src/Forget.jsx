import React, { useContext } from "react";
import "./Register.css";
import { Link } from "react-router";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

export default function Forget() {
  const { resetYourPassword, userEmailReset, setUserEmailReset} = useContext(AuthContext);


  const handleReset = async (e) => {

        Swal.fire({
          title: "Processing...",
          text: "Please wait",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

  e.preventDefault();

  const email = e.target.email.value;

  try {
    await resetYourPassword(email);
      Swal.close();
    Swal.fire({
      icon: "success",
      title: "Reset Link Sent!",
      allowOutsideClick: false,
      text: "Please check your email to reset your password.",
      showConfirmButton: false,
      timer: 2000,
    });

    setUserEmailReset(null);

    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
    }, 2500); 

  } catch (error) {
          Swal.close();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message.slice(9),
    });
  }
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
              name="email" 
              placeholder="Enter your email"
              defaultValue={userEmailReset ? userEmailReset : "" }
              required
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
