import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, isLoginedTC } from "./../../Redux/authReducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
   this.props.isLoginedTC();
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { setAuthUserData, isLoginedTC })(HeaderContainer);
