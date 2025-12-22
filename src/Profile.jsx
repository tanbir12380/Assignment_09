import React, { useContext, useRef } from "react";
import "./Profile.css";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";

const Profile = () => {
  const {user,updateUsersDetails}= useContext(AuthContext);
   const dialogRef = useRef();
  return (
    <div className="profile-wrapper">

<dialog ref={dialogRef} className="skill-dialog">
  <form
    className="dialog-box"
    onSubmit={(e) => {
      e.preventDefault();

     const name =  e.target.name.value;
     const photo = e.target.photo.value;


              updateUsersDetails(user, name, photo)
                .then(() => {
      Swal.fire({
        icon: "success",
        title: "Profile is updated",
        showConfirmButton: false,
        timer: 1500
      });
            dialogRef.current.close();
                })
                .catch((error) => {
                 
                  Swal.fire({
                    icon: "error",
                    title: "Failed to update profile",
                    text: error.message.slice(9),
                  });
                        dialogRef.current.close();
                });

    }}
  >
    <h3 className="dialog-title">Update your profile</h3>

<label>Your name</label>
    <input
      type="text"
      name = "name"
      defaultValue={user?.displayName}
      placeholder="Your Name"
      className="dialog-input"
      required
    />

<label>Your photo</label>
    <input
      type="text"
      name = "photo"
      placeholder="Your photo"
      className="dialog-input"
        defaultValue={user?.photoURL}
      required
    />

    <div className="dialog-actions">
      <button
        type="submit"
        className="dialog-submit"
      >
        Submit
      </button>

      <button
        type="button"
        className="dialog-close"
        onClick={() => {
          dialogRef.current.close();
        }}
      >
        Cancel
      </button>
    </div>
  </form>
</dialog>

      <div className="profile-card">
        <div className="profile-image-box">
          <img
            src={user?.photoURL}
            alt="Profile"
          />
        </div>

        <h2 className="profile-name">{user?.displayName}</h2>
        <p className="profile-email">{user?.email}</p>

        <button onClick={()=>{
          dialogRef.current.showModal();
        }} className="update-profile-btn">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
