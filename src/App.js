import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./components/Pages/Pages.css";
import Profile from "./components/Pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/News";
import Friends from "./components/Pages/Friends/Friends";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sideBar} />
      <div className="app-wrapper__pages">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                store={props.store}
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/messages/*"
            element={<DialogsContainer store={props.store} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
