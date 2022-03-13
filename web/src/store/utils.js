import axios from "axios";

// axios settings
const DEBUG = import.meta.env.DEV;

const PROD_API_URL = "https://struckomerce.struckchure.com";
const DEV_API_URL = "http://localhost:8000";

const BASE_URL = DEBUG ? DEV_API_URL : PROD_API_URL;
const API_URL = BASE_URL + "/api/v1/";

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

const storage = new Storage();

export const get_headers = () => ({
  Authorization: `Token ${storage.get("token")}`,
});
