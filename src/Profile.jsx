import React, { useContext } from "react";
import "./Profile.css";
import { AuthContext } from "./AuthContext";

const Profile = () => {
  const {user}= useContext(AuthContext);
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-image-box">
          <img
            src={user?.photoURL}
            alt="Profile"
          />
        </div>

        <h2 className="profile-name">{user?.displayName}</h2>
        <p className="profile-email">{user?.email}</p>

        <button className="update-profile-btn">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
