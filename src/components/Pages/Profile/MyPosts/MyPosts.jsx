import "./MyPosts.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className="AddPost">
      <div> <h3>Add post</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>

      <div className="MyPosts">My posts
      <Post message="True way of Samurai" likes="0" />
      <Post message="I finaly understood props" likes="99" />
      </div>
    </div>
  );
};
export default MyPosts;
