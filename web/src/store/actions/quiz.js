import { GET_QUIZ, GET_QUIZ_LIST, SUBMIT_QUIZ } from "../types";
import { api, Storage } from "../utils";

const storage = new Storage();

export const getQuizList = () => async (dispatch) => {
  await api({
    url: "/quiz/list/",
    method: "GET",
  })
    .then((response) => {
      dispatch({
        type: GET_QUIZ_LIST,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getQuiz = (uuid) => async (dispatch) => {
  await api({
    url: `quiz/${uuid}/details/`,
    method: "GET",
  })
    .then((response) => {
      dispatch({
        type: GET_QUIZ,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const submitQuiz = (uuid, quiz_data) => async (dispatch) => {
  await api({
    url: `quiz/${uuid}/submit/`,
    method: "POST",
    data: quiz_data,
    headers: {
      Authorization: `Token ${storage.get("token")}`,
    },
  })
    .then((response) => {
      dispatch({
        type: SUBMIT_QUIZ,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
