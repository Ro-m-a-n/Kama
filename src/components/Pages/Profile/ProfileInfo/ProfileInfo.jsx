import "./ProfileInfo.css";
const ProfileInfo = () => {
  return (
    <div className="ProfileInfo__wrapper">
      <img
        className="Img"
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgURwdLvzOYu9YY4afAeHcYywPyITV-YuGw&usqp=CAU"
      ></img>

      <div className="Profile__description">Profile description</div>
    </div>
  );
};
export default ProfileInfo;
