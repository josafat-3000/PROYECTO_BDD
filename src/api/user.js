import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Cambia esto a tu URL de API

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

export const getRoles = async () => {
  const response = await axios.get(`${API_URL}/roles`);
  return response.data;
};

export const getStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/students`,{
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching students', error);
    throw error;
  }
};

export const getSchools = async () => {
  const response = await axios.get(`${API_URL}/schools`);
  return response.data;
};

export const createSchool = async (schoolData) => {
  const response = await axios.post(`${API_URL}/schools`, schoolData,{
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
  return response.data;
};

export const getPractices = async () => {
  const response = await axios.get(`${API_URL}/practices`,{
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
  return response.data;
};

export const getPracticesById = async (id) => {
  const response = await axios.get(`${API_URL}/practices/${id}`,{
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
  return response.data;
};

export const getPractica = async (id) => {
  const response = await axios.get(`${API_URL}/practices/by/${id}`,{
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
  return response.data;
};

export const getTopics = async () => {
  const response = await axios.get(`${API_URL}/temas`,{
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
  return response.data;
};

export const createPractice = async (practiceData) => {
  console.log(practiceData)
  const response = await axios.post(`${API_URL}/practices`,practiceData,{
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
  return response.data;
};

export const updatePractica = async (id, updatedPractica) => {
  console.log(updatedPractica)
  try {
    const response = await axios.patch(`${API_URL}/practices/${id}`, updatedPractica,{
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating practica', error);
    throw error;
  }
};


export const createTopic = async (topicData) => {
  console.log(localStorage.getItem("accessToken"))
  const response = await axios.post(`${API_URL}/temas`, topicData,{
    headers: { accessToken: localStorage.getItem("accessToken") },
  });
  return response.data;
};

export const getUser = async (id) => {
  console.log(id)
  try {
    const response = await axios.get(`${API_URL}/auth/user/${id}`,{
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user', error);
    throw error;
  }
};

export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.patch(`${API_URL}/auth/user/${id}`, updatedUser,{
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user', error);
    throw error;
  }
};