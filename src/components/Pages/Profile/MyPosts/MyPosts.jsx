import "./MyPosts.css";
import Post from "./Post/Post";

let postsData = [
  { id: 1, text: "True way of Samurai", likes: 5 },
  { id: 2, text: "I finaly understood props", likes: 100 },
];
let postsElements = postsData.map(el=><Post text={el.text} likes={el.likes} id={el.id}/>)
const MyPosts = () => {
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
