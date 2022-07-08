import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
