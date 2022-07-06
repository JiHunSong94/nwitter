import React, { useState } from "react";
import AppRouter from "./Router";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
