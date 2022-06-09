import "./Post.css";
const Post = (props) => {
  return (
    <div className="Post">
      <div>
        <img
          alt=""
          src="https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s68-c-k-c0x00ffffff-no-rj"
        ></img>
      </div>
      <div>{props.text}</div>
      <div>
        <span>{props.likes} Likes</span>
      </div>
    </div>
  );
};
export default Post;
