import { useState } from "react";
import { CiEdit } from "react-icons/ci";
const ProfileDescription = (props) => {
  const [moreContacts, setMoreContacts] = useState(false);

  return (
    <div className="profile_description">
      <CiEdit className="profile_editIcon" onClick={props.switchToEditMode} />
      <div>
        <b>Full name: </b> {props.profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b> {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>My professional skills: </b>{" "}
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div><b>About me: </b>{props.profile.aboutMe}</div>
      <div>
        <span className="profile_contacts__buttons">
          <b>Contacts: </b>{" "}
          {moreContacts ? (
            <button onClick={() => setMoreContacts(!moreContacts)}>
              {"hide contacts"}
            </button>
          ) : (
            <button onClick={() => setMoreContacts(!moreContacts)}>
              {"view more..."}
            </button>
          )}
        </span>
        {moreContacts &&
          Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {" "}
      <b>{contactTitle}:</b> {contactValue}
    </div>
  );
};
export default ProfileDescription;
