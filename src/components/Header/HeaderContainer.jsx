import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "./../../Redux/authReducer";
import { authAPI } from "../../api/api";
import * as axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.isLogined().then((data) => {
      
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData({ id, email, login });
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
