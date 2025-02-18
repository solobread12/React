import { Navigate } from "react-router-dom";

const Help = ({ children }) => {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/" />;
};

export default Help;