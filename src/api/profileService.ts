import { Profile } from "../api/profile";
import axios from "axios";

const API_BASE_URL = "http://localhost:5001"; // 👈 match your Express port

export const fetchProfileById = async (id: number): Promise<Profile> => {
  const { data } = await axios.get<Profile>(`${API_BASE_URL}/profiles/${id}`);
  return data;
};
