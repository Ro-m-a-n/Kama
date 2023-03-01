import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";

import { AddMessageForm } from "./../../Dialogs/Message/AddMessage/AddMessage";
import { reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((el) => (
    <Post
      photo={props.photo}
      key={el.id}
      text={el.text}
      likes={el.likes}
      id={el.id}
      profile={props.profile}
    />
  ));
  const onSubmit = (formData) => {
    props.addText(formData.message);
  };
  let AddPostReduxForm = reduxForm({
    form: "AddPostReduxForm",
  })(AddMessageForm);

  return (
    <div className="myPostWrapper">
      <div className="AddPost">
        <h3>My posts</h3>
      </div>

      <div className="MyPosts">{postsElements}</div>

      <AddPostReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default MyPosts;
