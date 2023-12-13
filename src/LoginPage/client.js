import axios from "axios";
  
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;

export const signin = async (credentials) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
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

  export const getUser = async () => {
    const response = await axios.get(`${USERS_API}/profile`);
    return response.data;
  }


  
  
  
  
  
  