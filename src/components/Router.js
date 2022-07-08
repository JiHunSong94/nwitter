import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
