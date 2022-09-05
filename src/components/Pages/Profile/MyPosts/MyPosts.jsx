import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";

import { AddMessageForm } from "./../../Dialogs/Message/AddMessage/AddMessage";
import { reduxForm } from "redux-form";

const MyPosts = (props) => {
  console.log("render")
  let postsElements = props.postsData.map((el) => (
    <Post text={el.text} likes={el.likes} id={el.id} />
  ));
  const onSubmit = (formData) => {
    props.addText(formData.message);
  };
  let AddPostReduxForm = reduxForm({
    form: "AddPostReduxForm",
  })(AddMessageForm);

  return (
    <div>
      <div className="AddPost">
        <h3>Add Post</h3>
      </div>
      <AddPostReduxForm onSubmit={onSubmit} />
      <div className="MyPosts">My posts
      {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;

// const MyPosts = (props) => {

//   let postsElements = props.postsData.map((el) => (
//     <Post text={el.text} likes={el.likes} id={el.id} />
//   ));

//   return (
//     <div className="AddPost">
//       <h3>Add post</h3>
//       <AddTextContainer/>
//       <div className="MyPosts">
//         My posts
//         {postsElements}
//       </div>
//     </div>
//   );
// };
// export default MyPosts;
