import "./App.css";
import "./components/Global/global.css";
import React, { Suspense, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

import { Route, Routes, Navigate } from "react-router-dom";
import News from "./components/Pages/News/News";

import Settings from "./components/Pages/Settings/Settings";

import UsersContainer from "./components/Pages/UsersPage/Users/UsersContainer";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import CurrentUserContainer from "./components/Pages/UsersPage/CurrentUser/CurrentUserContainer";

import LoginPage from "./components/Pages/Login/Login";
import { initializeAppTC } from "./Redux/appReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/Global/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Pages/Dialogs/DialogsContainer")
);

const App = (props) => {
  const catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("some error occured");
  };
  useEffect(() => {
    props.initializeAppTC();
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    return () => {
      window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
    };
  }, []);

  if (!props.initialized) {
    return (
      <div className="preloader">
        <Preloader />
      </div>
    );
  }

  if (!props.isAuth) {
    return <LoginPage />;
  }
  return (
    <>
      <div className="app-wrapper">
        <Navbar />
        <div className="app_wrapper__pages">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/messages" element={<DialogsContainer />} />
              <Route
                path="/messages/:dialogId/*"
                element={<DialogsContainer />}
              />
              <Route path="/news" element={<News />} />

              <Route path="/settings" element={<Settings />} />

              <Route path="/users/:userId" element={<CurrentUserContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<div>404 Not found</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};

const mstp = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
});
export default compose(connect(mstp, { initializeAppTC }))(App);
