import "./Post.css";
import {TiDeleteOutline} from 'react-icons/ti'
import {HiOutlineHeart} from 'react-icons/hi'
const Post = (props) => {
  return (
    <div className="post">
      <div className="post_author" > {`${props.profile.fullName}:` || "Me:"  }</div>
      <div className="post_text">{props.text}</div>

      <span className="post_likes">
        <div>{props.likes} <HiOutlineHeart className="post_icon__like"/> </div>
      </span>
      <TiDeleteOutline className="post_icon__delete" onClick={()=>{props.deletePostAC(props.id)}}/>
    </div>
  );
};
export default Post;
