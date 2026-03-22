import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createReservation = async (reservationData: unknown) => {
  const response = await axios.post(`${API_URL}/reservations`, reservationData);
  return response.data;
};

export const fetchReservations = async () => {
  const response = await axios.get(`${API_URL}/reservations`);
  return response.data;
};

export const updateReservationStatus = async (id: string, status: string) => {
  const response = await axios.put(`${API_URL}/reservations/${id}`, { status });
  return response.data;
};

export const deleteReservation = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/reservations/${id}`);
    return response.data;
  } catch (error) {
    console.error("Silme hatası:", error);
    throw error;
  }
};