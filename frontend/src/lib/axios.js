import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api", // nếu là mtruong development thì dùng vậy 5000 còn không thì dùng localhost nào cũng được
  withCredentials: true, //cookie
});

export default axiosInstance;
