import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="Navbar_LoginButton">
      {props.isAuth ? (
        <div className="NavbarLink" onClick={props.logoutTC}>
          Log out
        </div>
      ) : (
        <NavLink to={"/login"} className="NavbarLink">
          Login
        </NavLink>
      )}
    </header>
  );
};
export default Header;
