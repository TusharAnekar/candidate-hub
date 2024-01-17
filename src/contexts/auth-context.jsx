import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const localIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const loginHandler = ({ email, password }) => {
    if (email === "tushar@gmail.com" && password === "Tushar123$") {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      navigate("/");
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid username and password");
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler, localIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
