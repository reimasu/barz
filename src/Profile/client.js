import axios from "axios";
  
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const FOLLOW_API = `${BASE_API}/api/follows`;
export const USERS_API = `${BASE_API}/api/users`;

export const deleteFollow = async (followId) => {
    const response = await axios.delete(
      `${FOLLOW_API}/${followId}`, followId); // might need to change followId to follow_id
    return response.data;
  };

  export const getUserById = async (user) => {
    const response = await axios.get(`${USERS_API}/${user}`);
    return response.data;
  };
  export const profile = async () => {
    const response = await axios.post(`${USERS_API}/profile`);
    return response.data;
}; // not using this anywhere it does same thing as getUserById

export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

  