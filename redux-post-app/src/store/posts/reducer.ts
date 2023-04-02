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
    case PostActionTypes.FETCH_POST_REQUEST:
      return {
        posts: [
          {
            id: 1,
            title: "Sample Post Title",
            content: "This is a sample post content.",
            author: "John Doe",
            publishedAt: "2022-10-01T12:00:00Z",
            tags: ["tag1", "tag2", "tag3"],
          },
        ],
      };
    default:
      return state;
  }
};

export default postReducer;
