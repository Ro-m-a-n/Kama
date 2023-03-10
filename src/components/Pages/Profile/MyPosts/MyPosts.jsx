import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import { AddMessageForm } from "./../../Dialogs/Message/AddMessage/AddMessage";
import { reduxForm } from "redux-form";
import { useState } from "react";

const MyPosts = (props) => {
  const [postId, setPostId] = useState(7);
  let postsElements = props.postsData.map((el) => (
    <Post
      photo={props.photo}
      key={el.id}
      text={el.text}
      likes={el.likes}
      id={el.id}
      profile={props.profile}
      deletePostAC={props.deletePostAC}
      likeThisPostAC={props.likeThisPostAC}
      unlikeThisPostAC={props.unlikeThisPostAC}
    />
  ));
  const onSubmit = (formData) => {
    setPostId(postId + 1);
    props.addText(formData.message, postId);
  };
  let AddPostReduxForm = reduxForm({
    form: "AddPostReduxForm",
  })(AddMessageForm);

  return (
    <div className="myPost_wrap">
      <div className="myPosts">
        <h3>My posts</h3>

        <div className="MyPosts">{postsElements}</div>
      </div>

      <div className="addPost_BG"></div>
      <div className="addText_container">
        {" "}
        <AddPostReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default MyPosts;
