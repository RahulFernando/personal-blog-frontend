import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API}/v1/api`,
  headers: {
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "",
  },
});

export default http;
