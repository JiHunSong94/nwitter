import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

const Profile = ({ userObj }) => {
  const auth = getAuth();
  let navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate("/", { replace: true });
  };
  const getMyNweets = async () => {
    const q = query(
      collection(db, "nweets"),
      where("nweetObj.creatorId", "==", userObj.uid),
      orderBy("nweetObj.createdAt", "desc")
    );
    const data = await getDocs(q);
    console.log(data.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
