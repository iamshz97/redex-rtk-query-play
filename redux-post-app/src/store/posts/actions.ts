import { PostActionTypes } from "./constants";
import { Post, PostAction } from "./types";

export const addPost = (value: Post): PostAction => ({
  type: PostActionTypes.ADD_POST,
  post: value,
});

export const removePost = (value: Post): PostAction => ({
  type: PostActionTypes.REMOVE_POST,
  post: value,
});

export const fetchPostRequest = (): PostAction => ({
  type: PostActionTypes.FETCH_POST_REQUEST,
});
