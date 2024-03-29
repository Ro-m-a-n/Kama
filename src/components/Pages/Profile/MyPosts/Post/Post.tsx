import { TiDeleteOutline } from "react-icons/ti";
import { HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import { ProfileInfoType } from "../../../../../Redux/profileReducer";

type PropsType = {
  photo: string;
  key: number;
  text: string;
  likes: number;
  id: number;
  profile: ProfileInfoType;
  deletePostAC: (id: number) => void;
  likeThisPostAC: (id: number) => void;
  unlikeThisPostAC: (id: number) => void;
};
const Post: React.FC<PropsType> = (props) => {
  const [likedPost, setLikedPost] = useState(false);
  return (
    <div className="post">
      <div className="post_author">
        {props.profile.fullName ? `${props.profile.fullName}:` : "Me:"}
      </div>
      <div className="post_text">{props.text}</div>

      <span className="post_likes">
        <div>
          {props.likes}

          {likedPost ? (
            <HiOutlineHeart
              className="post_icon__liked"
              onClick={() => {
                props.unlikeThisPostAC(props.id);
                setLikedPost(false);
              }}
            />
          ) : (
            <HiOutlineHeart
              className="post_icon__like"
              onClick={() => {
                props.likeThisPostAC(props.id);
                setLikedPost(true);
              }}
            />
          )}
        </div>
      </span>
      <TiDeleteOutline
        className="post_icon__delete"
        onClick={() => {
          props.deletePostAC(props.id);
        }}
      />
    </div>
  );
};
export default Post;
