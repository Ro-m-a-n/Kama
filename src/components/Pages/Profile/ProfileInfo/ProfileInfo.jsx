import { NavLink } from "react-router-dom";
import Preloader from "../../../Global/Preloader/Preloader";
import "./ProfileInfo.css";
import instagram from "../../../../assets/images/socialNet/instagram.png";
import git from "../../../../assets/images/socialNet/git.png";
import facebook from "../../../../assets/images/socialNet/facebook.png";
import twitter from "../../../../assets/images/socialNet/twitter.png";
import youtube from "../../../../assets/images/socialNet/youtube.png";
import site from "../../../../assets/images/socialNet/site.png";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="ProfileInfo__wrapper" key={props.profile.userId}>
      <div className="Ava_links">
        <img className="Img" alt="" src={props.profile.photos.large}></img>
        
        <div className="SocialNetworks">
          {props.profile.contacts.instagram? (<NavLink to={props.profile.contacts.instagram}>
            <img alt="" src={instagram} />
          </NavLink>):null}
          {props.profile.contacts.github?(<NavLink to={props.profile.contacts.github}>
            <img alt="" src={git} />
          </NavLink>):null}
          
          {/* <NavLink to={props.profile.contacts.facebook}>
            <img alt="" src={facebook} />
          </NavLink>
          <NavLink to={props.profile.contacts.twitter}>
            <img alt="" src={twitter} />
          </NavLink>
          <NavLink to={props.profile.contacts.youtube}>
            <img alt="" src={youtube} />
          </NavLink>
          <NavLink to={props.profile.contacts.website}>
            <img alt="" src={site} />
          </NavLink> */}
        </div>
        <div className="FullName">{props.profile.fullName}</div>
        <div>
          Статус поиска работы:
          {props.profile.lookingForAJob ? " в поиске" : "работаю"}
        </div>
        {props.profile.lookingForAJob ? (
          <div>
            Что я ищу?:
            {" " + props.profile.lookingForAJobDescription}
          </div>
        ) : null}
      </div>
      <div  className="Profile__description">
              <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};
export default ProfileInfo;
