import { useState } from "react";
import { useAuthContext } from "../contexts/auth-context";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const { loginHandler } = useAuthContext();

  const handleInput = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  };

  const handleLoginWithTestUser = () => {
    setLoginDetails({
      ...loginDetails,
      email: "tushar@gmail.com",
      password: "Tushar123$",
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold text-orange-600">Candidate Hub</h1>
      <form onSubmit={handleSubmit} className="w-screen max-w-96 border p-4">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={loginDetails.email}
          required
          className="mb-4 block w-full rounded-md border border-black p-1"
          onChange={handleInput}
        />
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginDetails.password}
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          title="Password should contain min 8 charcters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
          className="mb-4 block w-full rounded-md border border-black p-1"
          onChange={handleInput}
        />

        <button
          type="submit"
          className="mb-4 block w-full rounded-md bg-orange-600 p-2 text-white"
        >
          Login
        </button>
        <button
          className="block w-full rounded-md bg-orange-600 p-2 text-white"
          onClick={handleLoginWithTestUser}
        >
          Login with test user
        </button>
      </form>
    </div>
  );
};

export { Login };
