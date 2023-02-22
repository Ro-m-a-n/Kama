import { useState, useEffect } from "react";
import FriendNav from "./FriendNav/FriendNav";
import "./FriendsNav.css";
const FriendsNav = (props) => {
  const [followedUsers, setFollowedUsers] = useState([]);
  const [followedUsersTotal, setFollowedUsersTotal] = useState([]);
  let filteredUsers = props.users.filter((user) => user.followed === true);
  useEffect(
    () => setFollowedUsers(filteredUsers)
    ,
    [props.users]
  );


   


  let namesNav = followedUsers.map((user) => (
    <FriendNav name={user.name} key={user.id} />
  ));
  return <div className="friendsNav">{namesNav}</div>;
};
export default FriendsNav;
