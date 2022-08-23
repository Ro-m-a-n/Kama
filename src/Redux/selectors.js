import { createSelector } from '@reduxjs/toolkit'

export const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users;
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getUsersQuantity = (state) => {
  return state.usersPage.usersQuantity;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getSendedRequest = (state) => {
  return state.usersPage.sendedRequest;
};
