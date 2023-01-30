import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "2c9a99e4-c8c3-402a-850e-d11227470f7d" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  isLogined() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then((response) => {
      return response.data;
    });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};

export const currentUserApi = {
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then((response) => {
      return response.data;
    });
  },

  getUser(router) {
    let userId = router.params.userId;
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getMyProfile(myId) {
        return instance.get(`profile/${myId}`).then((response) => {
      return response.data;
    });
  },
  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } ).then((response) => {
      return response.data;
    });
  },
};

