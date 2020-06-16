import axios from "axios";

axios.defaults.baseURL = "/api/";

export const loadUserAsync = async (config) =>
  await axios.get("auth/user", config);
export const loginAsync = async (username, password) =>
  await axios.post("auth/login", { username, password });
export const logoutAsync = async (config) =>
  await axios.post("auth/logout/", null, config);
export const registerAsync = async (data) =>
  await axios.post("auth/register", data);
