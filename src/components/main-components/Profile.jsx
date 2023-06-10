import React from "react";
import "../../assets/css/Profile.css"

const Profile = () => {
  const vibratorClick = () => {
    window.navigator.vibrate([200, 50, 200]);
  };
  return (
    <div>
      Profile
      <button id="vibrator" onClick={vibratorClick}>
        Click Me
      </button>
    </div>
  );
};

export default Profile;
