import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  maxLengthTC,
  Required,
} from "./../../../utilites/validators/Validators";
import { Input } from "../../Global/FormsControl/FormsControl";
import { loginTC } from "./../../../Redux/authReducer";
import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


let maxLength = maxLengthTC(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"email"}
          placeholder="email"
          validate={[Required, maxLength]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          placeholder="password"
          type={"password"}
          validate={[Required, maxLength]}
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button> login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);


let LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.loginTC(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth){
    return <Navigate to="/profile" />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mstp = (state)=>({
  isAuth: state.auth.isAuth
})
export default connect(mstp, { loginTC })(LoginPage);
