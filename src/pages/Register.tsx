import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Register = () => {
//   const dispatch = useAppDispatch();
//   const { name, email, password, role } = useAppSelector(
//     (state: RootState) => state.register
//   );

  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Register
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              //   onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
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
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Role
            </label>
            <input
              type="password"
              id="password"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              //   value={confirmPassword}
              //   onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </form>
  );
};

export default Register;
