import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLogged =
    localStorage.getItem("current user") ||
    sessionStorage.getItem("current user");
  return isLogged ? children : <Navigate to="/login" />;
}
