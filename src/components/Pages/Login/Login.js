import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { maxLengthTC, Required } from './../../../utilites/validators/Validators';
import { Input } from "../../Global/FormsControl/FormsControl";



let maxLength =  maxLengthTC(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input}  name={"login"} placeholder="login" validate={[Required, maxLength]}/>
      </div>
      <div>
        <Field component={Input}  name={"password"} placeholder="password" validate={[Required, maxLength]}/>
      </div>
      <div>
        <Field component={"input"} name={"remember me"} type={"checkbox"} />{" "}
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

const onSubmit = (formData)=>{
    console.log(formData)
}
let LoginPage = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};



export default LoginPage ;
