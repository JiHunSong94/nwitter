import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  });
  const refreshUser = () => {
    setUserObj(auth.currentUser);
  };
  return (
    <>
      {init ? (
        <>
          <AppRouter
            refreshUser={refreshUser}
            isLoggedIn={Boolean(userObj)}
            userObj={userObj}
          />
        </>
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
