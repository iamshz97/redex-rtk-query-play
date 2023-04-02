import axios, { AxiosError } from "axios";
import { Post } from "../store/posts/types";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (ex) {
    const error: AxiosError = ex as AxiosError<Post>;
    console.log("error getting post", ex);
    throw new Error(error.message);
  }
};
