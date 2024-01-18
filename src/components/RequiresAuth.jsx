import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

const RequiresAuth = ({ children }) => {
  const { localIsLoggedIn } = useAuthContext();
  const location = useLocation();

  return localIsLoggedIn ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }}></Navigate>
  );
};

export { RequiresAuth };
