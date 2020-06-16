import axios from "axios";

axios.defaults.baseURL = "/api/";

export const addLeadsAsync = async (lead, config) =>
  await axios.post("leads/", lead, config);
export const getLeadsAsync = async (config) => await axios.get("leads", config);
export const deleteLeadsAsync = async (id, config) =>
  await axios.delete(`leads/${id}/`, config);
