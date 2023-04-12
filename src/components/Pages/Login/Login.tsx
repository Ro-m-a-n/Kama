import "./Login.css";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { maxLengthTC, Required } from "../../../utilites/validators/Validators";
import { Input } from "../../Global/FormsControl/FormsControl";
import { loginTC } from "../../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import { appStateType } from "../../../Redux/reduxStore";
let maxLength = maxLengthTC(30);

const LoginForm: React.FC<
  InjectedFormProps<formSubmitType & loginFormOwnType> & loginFormOwnType
> = (props) => {
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
      <div className="rememberMe">
        <Field
          component={"input"}
          name={"rememberMe"}
          type={"checkbox"}
          label="Check me!"
        />
        <label>Remember me</label>
      </div>
      {props.error && <div className="form_summary__error"> {props.error}</div>}
      {props.captchaUrl && <img src={props.captchaUrl}></img>}
      {props.captchaUrl && (
        <div>
          <Field
            component={Input}
            name={"captcha"}
            placeholder="enter captcha"
            validate={[Required]}
          />
        </div>
      )}
      <div className="loginButton">
        <button> login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<formSubmitType & loginFormOwnType>({
  form: "login",
})(LoginForm);

let LoginPage: React.FC<mstpType & mdtpType> = (props) => {
  const onSubmit = (formData: formSubmitType) => {
    props.loginTC(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="wrapperLogin">
      <div className="nonSharpBackground">
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
    </div>
  );
};
type loginFormOwnType = { captchaUrl: string | null };
type formSubmitType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
};
type mstpType = {
  isAuth: boolean;
  captchaUrl: string | null;
};
type mdtpType = {
  loginTC: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
  ) => void;
};
const mstp = (state: appStateType): mstpType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mstp, { loginTC })(LoginPage);
