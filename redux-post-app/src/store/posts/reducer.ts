import { PostActionTypes } from "./constants";
import { AppState, Post, PostAction } from "./types";

const initialState: AppState = {
  posts: [],
};

const postReducer = (state: AppState = initialState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.ADD_POST:
      return {
        posts: [...state.posts, action.post],
      };
    case PostActionTypes.REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id != action.post?.id;
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
