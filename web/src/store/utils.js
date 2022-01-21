import axios from "axios";

export const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++) {
      state = reducers[i](state, action);
    }

    return state;
  };

export function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// axios settings

var API_URL = "https://dev-47-quiz-app-api.herokuapp.com/api/v1/";

axios.defaults.baseURL = API_URL;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";

export const api = axios.create({});

export class Storage {
  set(key, value) {
    localStorage.setItem(key, value);
  }

  get(key) {
    return localStorage.getItem(key);
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

// function to convert {item.time} to hours and minutes
export const convertTime = (time) => {
  // convert time to hours and minutes
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  // return the time in hours and minutes
  if (hours === 0) {
    return `${minutes} minutes`;
  } else if (minutes === 0) {
    return `${hours} hour(s)`;
  } else {
    return `${hours} hours ${minutes} minutes`;
  }
};
