import "./MyPosts.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  let postsElements = props.postsData.map(el=><Post text={el.text} likes={el.likes} id={el.id}/>)
  return (
    <div className="AddPost">
      <div>
        {" "}
        <h3>Add post</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>

      <div className="MyPosts">
        My posts
     {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
