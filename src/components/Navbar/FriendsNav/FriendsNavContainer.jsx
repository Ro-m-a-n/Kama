import { connect } from "react-redux";
import FriendsNav from './FriendsNav';

let mapStateToProps = (state) => {
  return {
    friendsNavData: state.sideBar.friendsNavData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsNav);
export default FriendsNavContainer;
