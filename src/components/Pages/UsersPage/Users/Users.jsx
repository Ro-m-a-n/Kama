import "./Users.css";
import userPhoto from "../../../../assets/images/userAvatarDefault.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
              className={props.currentPage === p && "selectedPage"}
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
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          { withCredentials: true,
                          headers: {'API-KEY':'2c9a99e4-c8c3-402a-850e-d11227470f7d'} }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.unFollow(u.id);
                          }
                        });
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          { withCredentials: true,
                            headers: {'API-KEY':'2c9a99e4-c8c3-402a-850e-d11227470f7d'} }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.follow(u.id);
                          }
                        });
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
