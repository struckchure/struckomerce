import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_SET_PROFILE,
  AUTH_UPDATE_PROFILE,
} from "../../types";
import { api, get_headers, Storage } from "../../utils";
import { setError, setLoading } from "../common";

const storage = new Storage();

export class User {
  login = async (dispatch, user_creds) => {
    await dispatch(setLoading(true));

    await api({
      url: "/accounts/login/",
      method: "POST",
      data: user_creds,
    })
      .then((res) => {
        dispatch({
          type: AUTH_LOGIN,
          payload: res.data,
        });
      })
      .catch((err) => {
        storage.remove("token");
        dispatch(setError(err));
      });

    await dispatch(setLoading(false));
  };

  register = async (dispatch, user_data) => {
    await dispatch(setLoading(true));

    await api({
      url: "/accounts/register/",
      method: "POST",
      data: user_data,
    })
      .then((res) => {
        dispatch({
          type: AUTH_REGISTER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      });

    await dispatch(setLoading(false));
  };

  logout = async (dispatch) => {
    await dispatch(setLoading(true));

    await api({
      url: "/accounts/logout/",
      method: "GET",
      headers: get_headers(),
    })
      .then((res) => {
        dispatch({
          type: AUTH_LOGOUT,
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      });

    await dispatch(setLoading(false));
  };

  update = async (dispatch, user_data) => {
    await dispatch(setLoading(true));

    await api({
      url: "/accounts/profile/",
      method: "POST",
      data: user_data,
      headers: get_headers(),
    })
      .then((res) => {
        dispatch({
          type: AUTH_UPDATE_PROFILE,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      });

    await dispatch(setLoading(true));
  };

  profile = async (dispatch) => {
    await dispatch(setLoading(true));

    await api({
      url: "/accounts/profile/",
      method: "GET",
      headers: get_headers(),
    })
      .then((res) => {
        dispatch({
          type: AUTH_SET_PROFILE,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(setError(err));
      });

    await dispatch(setLoading(false));
  };
}
