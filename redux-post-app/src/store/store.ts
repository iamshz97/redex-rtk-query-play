import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import loggerMiddleware from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

export default store;
