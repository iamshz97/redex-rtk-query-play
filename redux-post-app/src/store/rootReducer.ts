import { combineReducers } from "redux";
import postReducer from "./posts/reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
