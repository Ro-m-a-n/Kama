import "./Post.css";
import {HiOutlineHeart} from 'react-icons/hi'
const Post = (props) => {
  return (
    <div className="post">
      <div className="post_author" > {`${props.profile.fullName}:` || "Me:"  }</div>
      <div className="post_text">{props.text}</div>

      <span className="post_likes">
        <div>{props.likes} <HiOutlineHeart className="post_like__icon"/> </div>
      </span>
    </div>
  );
};
export default Post;
