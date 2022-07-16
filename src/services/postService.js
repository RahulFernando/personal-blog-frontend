import http from "../helpers/httpHelper";

const httpHelper = {
  getPosts: (data) => http.get(`/posts?${data}`),
  addPost: (data) => http.post("/posts", data),
};

export default httpHelper;
