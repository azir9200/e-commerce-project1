import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform your authentication logic here
    if (email === "user@example.com" && password === "password") {
      dispatch(login({ name: "John Doe", email }));
      navigate("/dashboard"); // Redirect to dashboard or another page after login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
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
              onChange={(e) => setPassword(e.target.value)}
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
