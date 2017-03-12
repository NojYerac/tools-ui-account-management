import * as types from "./types"

export const createAccount = () => ({
  type: types.CREATE_ACCOUNT
});

export const deleteAccount = () => ({
  type: types.DELETE_ACCOUNT
});

export const editAccount = () => ({
  type: types.EDIT_ACCOUNT
});

export const fetchAccount = () => ({
  type: types.FETCH_ACCOUNT
});
