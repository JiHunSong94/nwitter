import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";

const Profile = ({ userObj }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const auth = getAuth();
  let navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate("/", { replace: true });
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.display !== newDisplayName) {
      await updateProfile(userObj, {
        displayName: newDisplayName,
      });
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Updat Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
