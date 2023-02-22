import { useState } from "react";

const ProfileDescription = (props) => {
  const [moreContacts, setMoreContacts] = useState(false);

  return (
    <>
      <div>
        <div>
          {<button onClick={props.switchToEditMode}> Edit profile</button>}
        </div>
        <div>
          <b>Full name :</b> {props.profile.fullName}
        </div>
        <div>
          <b>Looking for a job :</b>{" "}
          {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob && (
          <div>
            <b>My professional skills:</b>{" "}
            {props.profile.lookingForAJobDescription}
          </div>
        )}

        <div>
          <span>
            <b>Contacts :</b>{" "}
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
    </>
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
