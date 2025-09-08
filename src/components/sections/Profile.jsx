import React from "react";
import "./Profile.css"; // Make sure this CSS file is in the same folder

const Profile = () => {
  return (
    <div className="profile-container">
      <img
        src="/profile-photo.jpg"
        alt="Sourav Gour"
        className="profile-photo"
      />
    </div>
  );
};

export default Profile;
