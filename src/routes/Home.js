import React, { useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
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
