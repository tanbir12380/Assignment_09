import React, { useContext } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

export default function LoginForm() {
  const { SignInUser, signInWithGoogle, userLocationS, setUserLocation } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    Swal.fire({
      title: "Processing...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const result = await SignInUser(email, password);

      // ✅ Firebase user info (for verification)
      console.log("Logged in user:", result.user);

      e.target.reset();
      Swal.close();

      Swal.fire({
        icon: "success",
        title: "You are logged in successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(userLocationS || "/");
      setUserLocation(null);
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message.replace("Firebase:", "").trim(),
      });
    }
  };

  const handleGoogleSignIn = async () => {
    Swal.fire({
      title: "Processing...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const result = await signInWithGoogle();
      console.log("Logged in user:", result.user);

      Swal.close();
      Swal.fire({
        icon: "success",
        title: "You are logged in successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(userLocationS || "/");
      setUserLocation(null);
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Google Sign-in Failed",
        text: error?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="register-container-pro">
      <div className="register-container">
        <form onSubmit={handleSignIn} className="register-card">
          <h2>Login to your Account</h2>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              style={{ marginBottom: "0px" }}
            />
          </div>

          <p
            className="login-link"
            style={{ textAlign: "left", marginTop: "0px" }}
          >
            <Link to="/forget">Forget your password?</Link>
          </p>

          <button className="register-btn" style={{ marginTop: "20px" }}>
            Login
          </button>

          <p className="login-link">
            Don't have any account? <Link to="/register">Register</Link>
          </p>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="google-btn"
            style={{
              background: "white",
              color: "black",
              border: "1px solid #e5e5e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "20px",
              width: "100%",
              boxShadow: "2px 2px 5px rgba(30, 30, 30, 0.25)",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              viewBox="0 0 512 512"
            >
              <g>
                <path fill="#fff" d="m0 0H512V512H0"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}
