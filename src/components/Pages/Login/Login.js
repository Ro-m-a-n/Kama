import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} name={"login"} placeholder="login" />
      </div>
      <div>
        <Field component={"input"} name={"password"} placeholder="password" />
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



export default connect ({}, {})(LoginPage) ;
