import "./MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let postsElements = props.profilePage.postsData.map((el) => (
    <Post text={el.text} likes={el.likes} id={el.id} />
  ));

  return (
    <MyPosts/>
  );
};
export default MyPostsContainer;
