import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <header className="flex justify-between bg-orange-600 p-4 text-white">
      <h1 className="text-2xl">Candidate Hub</h1>
      <AccountCircleIcon />
    </header>
  );
};

export { Header };
