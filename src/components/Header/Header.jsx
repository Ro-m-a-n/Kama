import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
           
      <div className="Login">
        {props.isAuth ? (
          <div onClick={props.logoutTC}>Log out</div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  ); 
};
export default Header;
