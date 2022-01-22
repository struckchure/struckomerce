import { Provider } from "react-redux";

import Router from "./router";
import store from "./store";

import "./assets/css/icons.css";
import "./assets/css/index.css";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
