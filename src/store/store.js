// Import dependencies
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import todosReducer from "./reducers/todos";

const Store = createStore(
  combineReducers({
    todos: todosReducer,
  }),
  composeWithDevTools()
);

export default Store;
