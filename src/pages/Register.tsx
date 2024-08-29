import {
  setEmail,
  setName,
  setPassword,
  setRole,
} from "../redux/features/RegisterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useSignUpMutation } from "../redux/api/auth/authApi";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const { username, email, password, role } = useAppSelector(
    (state) => state.register
  );

  const [signUp] = useSignUpMutation();

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signUp({ username, email, role, password });
    console.log("Azir", { username, email, role, password });
    console.log("output", user);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="mb-8 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              username
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
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Role
            </label>
            <input
              type="role"
              id="role"
              value={role}
              onChange={(e) => dispatch(setRole(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                id="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Register
          </button>
          <div>
            <p className="bg-slate-200">
              Already register, Switch to
              <span>
                <Link
                  to="/login"
                  className="w-full bg-gradient-to-r from-green-700 to-red-600 text-white ml-4 px-6  text-xl rounded-lg hover:bg-green-800 transition-colors"
                >
                  Login
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
