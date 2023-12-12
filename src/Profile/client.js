import axios from "axios";
  
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/follows`;

export const deleteFollow = async (followId) => {
    const response = await axios.delete(
      `${USERS_API}/${followId}`, followId); // might need to change followId to follow_id
    return response.data;
  };