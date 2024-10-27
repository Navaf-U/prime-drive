import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-purple-800 mb-6">
          Login
        </h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            required
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-purple-800 text-white rounded-lg py-2 w-full hover:bg-purple-700 transition"
          >
            Login
          </button>
          <p className="text-center no-underline mt-4">
            Don&apos;t have an account?{" "}
            <NavLink to="/signup" className="text-purple-800 hover:underline">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
