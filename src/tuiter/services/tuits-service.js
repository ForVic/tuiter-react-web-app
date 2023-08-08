import axios from "axios";
const API_BASE = "https://tuiter-node-server-app-victor-e418b85406fb.herokuapp.com/api"
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
  const response = await axios.post("https://tuiter-node-server-app-victor-e418b85406fb.herokuapp.com/api/tuits", tuit);
  return response.data;
};

export const findTuits = async () => {
  const response = await axios.get("https://tuiter-node-server-app-victor-e418b85406fb.herokuapp.com/api/tuits");
  const tuits = response.data;
  return tuits;
};

export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${"https://tuiter-node-server-app-victor-e418b85406fb.herokuapp.com/api/tuits"}/${tid}`);
  return response.data;
};

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${"https://tuiter-node-server-app-victor-e418b85406fb.herokuapp.com/api/tuits"}/${tuit._id}`, tuit);
  return tuit;
};
