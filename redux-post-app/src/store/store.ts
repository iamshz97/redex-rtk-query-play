import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

export default store;
