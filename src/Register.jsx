import React, { useContext, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

export default function RegisterForm() {
      const [hidePass, setHidePass]= useState(true);
  const {
    createUser,
    updateUsersDetails,
    signInWithGoogle,
    userLocationS,
    setUserLocation,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password must be at least 6 characters long and include one uppercase and one lowercase letter",
      });
      return;
    }

    Swal.fire({
      title: "Processing...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    createUser(email, password)
      .then((respose) => {
        const user11 = respose.user;

        updateUsersDetails(user11, name, photo)
          .then(() => {
            Swal.close();

            Swal.fire({
              icon: "success",
              title: "Your account is registered successfully!",
              showConfirmButton: false,
              timer: 2000,
            });

            navigate(userLocationS || "/");
            setUserLocation(null);
          })
          .catch((error) => {
            Swal.close();
            Swal.fire({
              icon: "error",
              title: "Failed to update profile",
              text: error.message.slice(9),
            });
          });
      })
      .catch((error) => {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message.slice(9),
        });
      });

    e.target.reset();
  };

  const signWithGoogle1 = () => {
    Swal.fire({
      title: "Processing...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    signInWithGoogle()
      .then(() => {
        Swal.close();
            Swal.fire({
              icon: "success",
              title: "Your account is registered successfully!",
              showConfirmButton: false,
              timer: 2000,
            });
        navigate(userLocationS || "/");
        setUserLocation(null);
      })
      .catch((error) => {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message.slice(9),
        });
      });
  };

  return (
    <div className="register-container-pro">
      <div className="register-container">
        <form onSubmit={handleRegister} className="register-card">
          <h2>Create Account</h2>

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="input-group">
            <label>Photo URL</label>
            <input type="text" name="photo" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
<div style={{
  display:'flex',
  backgroundColor:'rgba(255, 255, 255, 1)',
  borderRadius:'5px',
  alignItems:'center',
  padding:'0px 10px 0px 0px',
  gap:'10px',
  border:'1px solid rgba(165, 165, 165, 0.8)'
}}>
              <input
              style={{
                backgroundColor:'none',
                border:'none',
                outline:'none'
              }}
              type={hidePass ? "password" : "text"}
              name="password"
              required
            />

            {
              hidePass ? <IoIosEyeOff size={24} style={{color:'black', cursor:'pointer'}} onClick={()=>{
                setHidePass(!hidePass)
              }}></IoIosEyeOff> : <IoIosEye size={24} style={{color:'black', cursor:'pointer'}} onClick={()=>{
                setHidePass(!hidePass)
              }}></IoIosEye>
            }

</div>
          </div>

          <button className="register-btn">Sign Up</button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>

          <button
            type="button"
            onClick={signWithGoogle1}
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
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "2px 2px 5px rgba(30, 30, 30, 0.25)",
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
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
}
