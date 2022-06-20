import React from "react";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state= props.store.getState();
 
  return (
    <MyPosts postsData={state.profilePage.postsData} store={props.store}/>
  );
};
export default MyPostsContainer;
