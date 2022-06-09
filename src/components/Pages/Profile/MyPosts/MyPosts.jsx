import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import AddText from "../../../Global/AddText";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((el) => (
    <Post text={el.text} likes={el.likes} id={el.id} />
  ));

  return (
    <div className="AddPost">
      <h3>Add post</h3>
      <AddText addPost={props.addPost} newTextPost={props.newTextPost} updateTextArea={props.updateTextArea}/>
      <div className="MyPosts">
        My posts
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
