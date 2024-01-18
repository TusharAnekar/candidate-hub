import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useAuthContext } from "../contexts/auth-context";

const Header = () => {
  const navigate = useNavigate();
  const [isProfileShow, setIsProfileShow] = useState(false);

  const { email, logout } = useAuthContext();

  const handleHeaderClick = () => {
    navigate("");
  };

  const handleProfile = () => {
    setIsProfileShow((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex justify-between bg-orange-600 p-4 text-white">
      <h1 className="cursor-pointer text-2xl" onClick={handleHeaderClick}>
        Candidate Hub
      </h1>
      <div className="relative ">
        <AccountCircleIcon onClick={handleProfile} className="cursor-pointer" />
        {isProfileShow && (
          <div className="absolute right-0 top-8 flex flex-col gap-2 rounded-lg bg-orange-600 p-4">
            <p>{email}</p>
            <button
              onClick={handleLogout}
              className="w-full rounded-lg bg-red-600 p-1"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
