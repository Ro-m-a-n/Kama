import "./Users.css";
import userPhoto from "../../../../assets/images/userAvatarDefault.png";
import { NavLink } from "react-router-dom";
import Pagination from "../../../Global/Pagination/Pagination";
import Preloader from "./../../../Global/Preloader/Preloader";

let Users = (props) => {
  return (
    <div>
      <div className="users_wrap">
        <Pagination
          itemsQuantity={props.usersQuantity}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
          portionSize={10}
        />
        {props.isFetching ? (
          <div className="preloader_users">
            <Preloader />
          </div>
        ) : (
          ""
        )}
        <div className="users_list">
          {props.users.map((u) => {
            
            return (
              <div key={u.id} className="users_currentUser">
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

                <div>
                  <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
