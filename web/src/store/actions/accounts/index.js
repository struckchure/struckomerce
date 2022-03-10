import { User } from "./models";

const user = new User();

export const loginUser = (user_creds) => async (dispatch) => {
  user.login(dispatch, user_creds);
};

export const registerUser = (user_data) => async (dispatch) => {
  user.register(dispatch, user_data);
};

export const getUserProfile = () => async (dispatch) => {
  user.profile(dispatch);
};

export const logoutUser = () => async (dispatch) => {
  user.logout(dispatch);
};
