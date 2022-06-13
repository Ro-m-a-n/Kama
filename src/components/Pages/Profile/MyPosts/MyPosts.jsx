import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import AddText from "../../../Global/AddText";

const MyPosts = (props) => {
  let postsElements = props.profilePage.postsData.map((el) => (
    <Post text={el.text} likes={el.likes} id={el.id} />
  ));

  return (
    <div className="AddPost">
      <h3>Add post</h3>
      <AddText  newTextPost={props.profilePage.newTextPost}  dispatch={props.dispatch}/>
      <div className="MyPosts">
        My posts
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
