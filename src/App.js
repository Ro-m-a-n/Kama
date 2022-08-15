import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./components/Pages/Pages.css";
import { Route, Routes } from "react-router-dom";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/News";
import Friends from "./components/Pages/Friends/Friends";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./components/Pages/UsersPage/Users/UsersContainer";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import CurrentUserContainer from "./components/Pages/UsersPage/CurrentUser/CurrentUserContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Pages/Login/Login";
import { initializeAppTC } from "./Redux/appReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/Global/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeAppTC();
  }
  render() {
    if(!this.props.initialized){
      return <Preloader></Preloader>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__pages">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/users/:userId" element={<CurrentUserContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mstp = (state) =>({
  initialized: state.app.initialized
})
export default compose(connect(mstp, { initializeAppTC }))(App);
