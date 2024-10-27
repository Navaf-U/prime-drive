import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center mt-5">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <NavLink to="/login">
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <span className="text-indigo-600 hover:underline"> Log in </span>
        </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Signup;
