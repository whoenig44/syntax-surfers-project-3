import { jwtDecode } from "jwt-decode";

export const getUserFromToken = (): { id: string; username: string } | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return jwtDecode<{ id: string; username: string }>(token);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
