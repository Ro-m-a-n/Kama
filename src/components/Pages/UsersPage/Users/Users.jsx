import "./Users.css";
import userPhoto from "../../../../assets/images/userAvatarDefault.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pageQuantity = Math.ceil(props.usersQuantity / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageQuantity; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? "selectedPage" : undefined}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <NavLink to={"/users/" + u.id}>
                <img
                  className="Users__avatar"
                  alt=""
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.sendedRequest.some((id) => id === u.id)}
                    onClick={() => {
                      props.unfollowTC(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.sendedRequest.some((id) => id === u.id)}
                    onClick={() => {
                      props.followTC(u.id);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
