import http from "../helpers/httpHelper";

const httpHelper = {
  posComments: (id, data) => http.post(`/comments/${id}`, data),
};

export default httpHelper;
