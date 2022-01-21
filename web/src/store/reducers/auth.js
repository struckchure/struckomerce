import { AUTH_LOGIN, AUTH_REGISTER } from "../types";
import { Storage } from "../utils";

const storage = new Storage();

const initialState = {
  is_authenticated: storage.get("token") ? true : false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      storage.set("token", action.payload.token);
      return {
        ...state,
        is_authenticated: true,
      };
    case AUTH_REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
