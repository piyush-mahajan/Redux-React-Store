import { createStore } from "redux";

import reducers from "./reducers/index";
const store = createStore(
  reducers,
  {},
  //   for the web extension
  window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);

export default store;
