import axios from "axios";

const API_BASE = "http://localhost:3000"; // à remplacer par ton endpoint

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/login`, { email, password }, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data; // contient token et info utilisateur
  } catch (error: any) {
    throw error.response?.data || { message: "Erreur inconnue" };
  }
};

export const signupUser = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/signup`, data);
    return response.data; // message de succès ou user créé
  } catch (error: any) {
    throw error.response?.data || { message: "Erreur inconnue" };
  }
};
