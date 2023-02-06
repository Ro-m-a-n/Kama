import "./App.css";
import React, { Suspense } from "react";
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

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent)=>{
    alert('some error occured')
  }
  componentDidMount() {
    this.props.initializeAppTC();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader></Preloader>;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__pages">
        <Suspense fallback={<div><Preloader /></div>}>
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
    );
  }
}
const mstp = (state) => ({
  initialized: state.app.initialized,
});
export default compose(connect(mstp, { initializeAppTC }))(App);
