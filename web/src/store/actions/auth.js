import { AUTH_LOGIN, AUTH_REGISTER } from "../types";
import { api, Storage } from "../utils";
import { setError } from "./common";

const storage = new Storage();

export const loginUser = (user_creds) => async (dispatch) => {
  await api({
    url: "/accounts/login/",
    method: "POST",
    data: user_creds,
  })
    .then((response) => {
      dispatch({
        type: AUTH_LOGIN,
        payload: response.data,
      });
    })
    .catch((err) => {
      storage.remove("token");
      dispatch(setError(err));
    });
};

export const registerUser = (user_data) => async (dispatch) => {
  await api({
    url: "/accounts/register/",
    method: "POST",
    data: user_data,
  })
    .then((response) => {
      dispatch({
        type: AUTH_REGISTER,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(setError(err));
    });
};
