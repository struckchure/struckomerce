import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_SET_PROFILE,
} from "../types";
import { Storage } from "../utils";

const storage = new Storage();

const initialState = {
  is_authenticated: storage.get("token") ? true : false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      storage.set("token", action.payload.data.token);
      return {
        ...state,
        is_authenticated: true,
      };
    case AUTH_REGISTER:
      return {
        ...state,
        user: action.payload.data,
      };
    case AUTH_SET_PROFILE:
      return {
        ...state,
        user: action.payload.data,
      };
    case AUTH_LOGOUT:
      storage.remove("token");
      return {
        ...state,
        is_authenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
