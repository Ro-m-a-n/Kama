import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="header">
      {" "}
      <img
        alt=""
        src="https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s68-c-k-c0x00ffffff-no-rj"
      ></img>
      <div className="Login">
        {props.isAuth ? (
          <div>Log out</div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
