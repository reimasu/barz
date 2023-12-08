import axios from "axios";
  
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;
export const signin = async (credentials) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const account = async () => {
    const response = await axios.post(`${USERS_API}/account`);
    return response.data;
};

  export const signup = async (user) => {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
  };
  
  export const signout = async () => {
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
  };
  
  
  
  
  
  
  