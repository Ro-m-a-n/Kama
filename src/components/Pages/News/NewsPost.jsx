import { HiOutlineHeart } from "react-icons/hi";
import { useState } from 'react';
let NewsPost = (props) => {
  let [likedPost, setLikedPost] = useState(false)
  return (
    <div className="news_post">
      <div className="news_header">
        <div className="news_header__avatar">
          <img src={props.news.resourceAvatar} alt="" />
        </div>
        <div className="news_header__resource">{props.news.resource}</div>
      </div>

      <div className="news_post__image">
        <img src={props.news.image} alt="" />
      </div>
      <div className="news_post__text"> {props.news.text}</div>
      <div className="news_post__likes">
        {props.news.likes}
        {likedPost ? (
          <HiOutlineHeart
            className="post_icon__liked"
            onClick={() => {
              props.unlikeThisNewsAC(props.news.id);
              setLikedPost(false);
            }}
          />
        ) : (
          <HiOutlineHeart
            className="post_icon__like"
            onClick={() => {
              props.likeThisNewsAC(props.news.id);
              setLikedPost(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default NewsPost;
