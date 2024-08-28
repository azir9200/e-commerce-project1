import {
  setEmail,
  setName,
  setPassword,
  setRole,
} from "../redux/features/RegisterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useSignUpMutation } from "../redux/api/auth/authApi";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, role } = useAppSelector(
    (state) => state.register
  );

  const [signUp] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signUp({ name, email, role, password });
    console.log("Azir", { name, email, role, password });
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
              htmlFor="name"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
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
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div>
          {/* <div>
            <label
              htmlFor="phone"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div> */}
          {/* <div>
            <label
              htmlFor="address"
              className="block text-sm text-gray-700 font-medium mb-2"
            >
              Address
            </label>
            <input
              type="address"
              id="address"
              value={address}
              onChange={(e) => dispatch(setAddress(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Register
          </button>
          <div>
            <p>
              Already register ! Switch to
              <span>
                <Link
                  to="/register"
                  className="w-full bg-gradient-to-r from-green-700 to-red-600 text-white  px-3 rounded-lg hover:bg-green-800 transition-colors"
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
