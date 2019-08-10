import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { appReducer as counter } from "./appReducer";

const appStore = createStore(counter, composeWithDevTools());

export default appStore;
