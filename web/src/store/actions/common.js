import { SET_ERROR, SET_LOADING } from "../types";

export const setLoading = (status) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: status,
  });
};

export const setError = (error) => (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: error,
  });
};
