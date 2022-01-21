import { SET_ERROR, SET_LOADING } from "../types";

const initialState = {
  is_loading: false,
  error: null,
};

export default (state = initialState, action) => {
  const { common } = state;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        is_loading: action.payload,
      };
    case SET_ERROR:
      const { message, status } = action.payload;
      return {
        ...state,
        error: { message, status },
      };
    default:
      return state;
  }
};
