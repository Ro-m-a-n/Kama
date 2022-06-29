import "./Navbar.css";
import { NavLink } from "react-router-dom";
import FriendsNavContainer from './FriendsNav/FriendsNavContainer';

const Navbar = (props) => {
  return (
    <nav className="nav">
      {" "}
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/friends">Friends</NavLink>
      <FriendsNavContainer/>
    </nav>
  );
};
export default Navbar;
