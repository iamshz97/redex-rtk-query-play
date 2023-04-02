import { ThunkAction } from "redux-thunk";
import {
  fetchPostFailed,
  fetchPostRequest,
  fetchPostSuccess,
} from "../actions";
import { Action } from "redux";
import { getPosts } from "../../../api/api";
import { RootState } from "../../rootReducer";
import { Post, PostAction } from "../types";

export const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  PostAction
> => {
  return async (dispatch) => {
    try {
      // dispatch request action
      dispatch(fetchPostRequest());

      // fetch data from API
      const data = await getPosts();

      console.log("data", data);

      // map the API response to Post interface
      const posts = data.map(mapApiResponseToPost);

      console.log("mapApiResponseToPost", posts);

      // dispatch success action with data
      dispatch(fetchPostSuccess(posts));
    } catch (error) {
      // dispatch error action with error message
      dispatch(fetchPostFailed((error as Error).message));
    }
  };
};

function mapApiResponseToPost(apiPost: any): Post {
  return {
    id: apiPost.id,
    title: apiPost.title,
    content: apiPost.body,
    author: "",
    publishedAt: new Date(),
    tags: [],
  };
}
