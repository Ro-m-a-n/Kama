import FriendNav from "./FriendNav/FriendNav";
import "./FriendsNav.css";
const FriendsNav = (props) => {
  let namesNav = props.friendsNavData.map((el) => (
    <FriendNav name={el.name} />
  ));
  return <div className="friendsNav">{namesNav}</div>;
};
export default FriendsNav;
