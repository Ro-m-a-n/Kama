import { connect } from "react-redux";
import FriendsNav from './FriendsNav';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
