import http from "../helpers/httpHelper";

const httpHelper = {
  getPosts: (data) => http.get(`/posts?${data}`),
  getPost: (id) => http.get(`/posts/${id}`),
  addPost: (data) => http.post("/posts", data),
  putPost: (id, data) => http.put(`/posts/${id}`, data),
  deletePost: (id) => http.delete(`/posts/${id}`),
};

export default httpHelper;
