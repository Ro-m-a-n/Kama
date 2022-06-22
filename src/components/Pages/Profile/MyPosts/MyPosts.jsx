import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import AddTextContainer from "./../../../Global/AddTextContainer";

const MyPosts = (props) => {
  
  let postsElements = props.postsData.map((el) => (
    <Post text={el.text} likes={el.likes} id={el.id} />
  ));

  return (
    <div className="AddPost">
      <h3>Add post</h3>
      <AddTextContainer/>
      <div className="MyPosts">
        My posts
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
