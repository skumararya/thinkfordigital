import axios from "axios";

const API_URL = '/api/index.php/api/v1';

export const axiosBaseURL = axios.create({
  baseURL: API_URL,
  headers: { "X-user": "zur1xjb4", "Content-Type": "application/json" },
});
