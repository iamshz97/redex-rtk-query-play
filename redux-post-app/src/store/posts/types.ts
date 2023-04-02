import { PostActionTypes } from "./constants";

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags: string[];
}

export interface PostAction {
  type: PostActionTypes;
  post?: Post;
  error?: string;
}

export interface AppState {
  posts: Post[];
  error: string;
  loading: boolean;
}
