import { NavLink } from "react-router-dom";
import Preloader from "../../../Global/Preloader/Preloader";
import "./CurrentUser.css";
import instagram from "../../../../assets/images/socialNet/instagram.png";
import git from "../../../../assets/images/socialNet/git.png";
import facebook from "../../../../assets/images/socialNet/facebook.png";
import twitter from "../../../../assets/images/socialNet/twitter.png";
import youtube from "../../../../assets/images/socialNet/youtube.png";
import site from "../../../../assets/images/socialNet/site.png";

const CurrentUser = (props) => {
    if (!props.currentUserInfo) {
    return <Preloader />;
  }
  return (
    <div className="CurrentUser__wrapper" key={props.currentUserInfo.userId}>
      <div className="Ava_links">
        <img
          className="Img"
          alt=""
          src={props.currentUserInfo.photos.large}
        ></img>

        <div className="SocialNetworks">
          {props.currentUserInfo.contacts.instagram ? (
            <NavLink to={props.currentUserInfo.contacts.instagram}>
              <img alt="" src={instagram} />
            </NavLink>
          ) : null}
          {props.currentUserInfo.contacts.github ? (
            <NavLink to={props.currentUserInfo.contacts.github}>
              <img alt="" src={git} />
            </NavLink>
          ) : null}
{/* 
          <NavLink to={props.currentUserInfo.contacts.facebook}>
            <img alt="" src={facebook} />
          </NavLink>
          <NavLink to={props.currentUserInfo.contacts.twitter}>
            <img alt="" src={twitter} />
          </NavLink>
          <NavLink to={props.currentUserInfo.contacts.youtube}>
            <img alt="" src={youtube} />
          </NavLink>
          <NavLink to={props.currentUserInfo.contacts.website}>
            <img alt="" src={site} />
          </NavLink> */}
        </div>
        <div className="FullName">{props.currentUserInfo.fullName}</div>
        <div>
          Статус поиска работы:
          {props.currentUserInfo.lookingForAJob ? " в поиске" : "работаю"}
        </div>
        {props.currentUserInfo.lookingForAJob ? (
          <div>
            Что я ищу?:
            {" " + props.currentUserInfo.lookingForAJobDescription}
          </div>
        ) : null}
      </div>
      <div className="currentUserInfo__description">
        <div>{props.currentUserInfo.aboutMe}</div>
      </div>
    </div>
  );
};
export default CurrentUser;
