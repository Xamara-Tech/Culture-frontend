//makes the API CALL TO BACKEND
import axios from 'axios';


const API_BASE = 'http://localhost:8000/api'; 

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE}/auth/login/`, { email, password });
  return response.data; // Expected to contain token, etc.
};

export const signupUser = async (
    email: string,
    username: string,
    password: string,
    password2: string,
    first_name: string,
    last_name: string,

  ) => {
    const response = await axios.post(`${API_BASE}/auth/register/`, {
      email,
      username,
      password,
      password2,
      first_name,
      last_name,
    
    });
    return response.data;
  };
  