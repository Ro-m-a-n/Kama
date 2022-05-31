import "./MyPosts.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className="MyPosts">
      <div>ava +descr</div>
      <div>my post</div>
      <div>new post</div>
      <Post message="True way of Samurai" likes="0"/>
      <Post message="I finaly understood props" likes="99" />
    </div>
  );
};
export default MyPosts;
