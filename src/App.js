import "./App.css";
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

function App(props) {
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
