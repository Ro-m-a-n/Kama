import "./App.css";
import React, { Suspense, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./components/Pages/Pages.css";
import { Route, Routes, Navigate } from "react-router-dom";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/News";
import Friends from "./components/Pages/Friends/Friends";
import UsersContainer from "./components/Pages/UsersPage/Users/UsersContainer";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import CurrentUserContainer from "./components/Pages/UsersPage/CurrentUser/CurrentUserContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
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
    return <Preloader />;
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
              <Route path="/messages/*" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<Friends />} />
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
