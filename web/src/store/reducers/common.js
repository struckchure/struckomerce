import { SET_ERROR, SET_LOADING } from "../types";

const initialState = {
  is_loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        is_loading: action.payload,
      };
    case SET_ERROR:
      if (!action.payload) return { ...state, error: null };

      const {
        data: { message },
        status,
      } = action.payload.response;

      return {
        ...state,
        error: { message, status },
      };
    default:
      return state;
  }
};
