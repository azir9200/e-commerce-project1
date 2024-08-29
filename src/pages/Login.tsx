import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import React from "react";
import { setName, setPassword } from "../redux/features/loginSlice";
import { setToken } from "../redux/features/userSlice";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const dispatch = useAppDispatch();
  const { username, password } = useAppSelector(
    (state: RootState) => state.login
  );
  const { token } = useAppSelector((state: RootState) => state.user);
  console.log("tok tok token", token);

  const [login] = useLoginMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await login({ username: username, password });
    const { token } = data?.data;
    const user = jwtDecode(token);
    console.log("Azir Login", token, "user", user);
    dispatch(setToken(token));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-700 to-red-600 ">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center  text-green-700">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => dispatch(setName(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Login
          </button>
          <div>
            <p>
              Need to Register, Click{" "}
              <span>
                <Link
                  to="/register"
                  className="w-full bg-green-300 text-white  px-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                  Register
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
