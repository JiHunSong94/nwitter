import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "nweets"), {
      nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
        />
        <input type="submit" value="nweet" />
      </form>
    </div>
  );
};

export default Home;
