import { NavLink } from "react-router-dom";
import "./Header.css";
import {RxHamburgerMenu} from 'react-icons/rx'


const Header = (props) => {
  return (
    <header className="header">
      {" "}
      <RxHamburgerMenu  className="menu_icon"/>
      <div className="Login">
        {props.isAuth ? (
          <button onClick={props.logoutTC}>Log out</button>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  ); 
};
export default Header;
