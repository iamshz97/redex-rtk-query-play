import {
  applyMiddleware,
  Dispatch,
  legacy_createStore as createStore,
  Middleware,
} from "redux";
import rootReducer, { RootState } from "./rootReducer";
import loggerMiddleware from "redux-logger";

const customLogger: Middleware = ({ getState }) => {
  return (next: Dispatch) => (action: any) => {
    console.log("Action fired", action);
    const returnValue = next(action);
    console.log("State after action", getState());
    return returnValue;
  };
};

const store = createStore(rootReducer, applyMiddleware(customLogger));

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

export default store;
