import http from "../helpers/httpHelper";

const httpHelper = {
  getPosts: (data) => http.get(`/posts?${data}`),
  addPost: (data) => http.post("/posts", data),
  deletePost: (id) => http.delete(`/posts/${id}`),
};

export default httpHelper;
