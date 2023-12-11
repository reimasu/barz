import axios from "axios";
  
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const USERS_API = `${BASE_API}/api`;

export const getAllPosts = async () => {
  const response = await axios.get(`${USERS_API}/posts`);
  return response.data;
};
  
export const getUserFromId = async (userId) => {
    const response = await axios.get(`${USERS_API}/users/${userId}`);
    return response.data;
};
  
  
  
  
  