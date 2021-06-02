import React from "react";
import { useSelector } from "react-redux";

import "./index.css";

function ProfileScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div className="profile-body">
      <div className="profile-info">
        <h3>Profile Info:</h3>
        <span>Name: {userInfo.name}</span>
        <span>Email: {userInfo.email}</span>
      </div>
      <div className="profile-avatar">
        <h3>Profile Avatar:</h3>
        <input type="file"></input> <button>Submit</button>
      </div>
      <button className="profile-logout">Logout</button>
    </div>
  );
}

export default ProfileScreen;
