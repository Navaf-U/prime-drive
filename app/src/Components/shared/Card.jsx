import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
/* eslint-disable react/prop-types */
function Card({
  id,
  name,
  model,
  company,
  years_old,
  previous_owners,
  rate,
  description,
  image,
}) {
  return (
    <div className="group">
      <div className="relative m-5 max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-gray-500">
        <NavLink
          to={`/product/${id}`}
          className="transition-transform duration-500 ease-in-out hover:scale-105 flex justify-center w-full h-60 overflow-hidden rounded-lg"
        >
          <img className="object-cover w-full h-full" src={image} alt={model} />
        </NavLink>
        <NavLink to="" className="relative mx-3 mt-3 flex justify-center">
          <p className="text-lg font-bold pt-2 text-slate-900 truncate">
            {name}
          </p>
        </NavLink>

        <div className="mt-4 px-5 pb-5 flex flex-col">
          <p className="text-gray-600">
            Model: <span className="font-semibold">{model}</span>
          </p>
          <p className="text-gray-600">
            Company: <span className="font-semibold">{company}</span>
          </p>
          <div className="mt-2 mb-5">
            <p>
              <span className="text-lg font-bold text-slate-900">{rate}₹</span>
            </p>

            <p className="flex items-center">
              <span className="text-lg font-bold text-slate-900">
                {years_old} years old
              </span>
            </p>
          </div>
          <p className="text-gray-600 mb-2">
            Description: <span className="font-semibold">{description}</span>
          </p>
          <p className="text-gray-600 mb-2">
            Previous Owners:
            <span className="font-semibold">{previous_owners}</span>
          </p>
          <NavLink
            to={`/product/${id}`}
            className="flex items-center justify-center rounded-md mt-2 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <Button
              variant="contained"
              style={{ backgroundColor: "#522258", color: "#fff" }}
            >
              View Details
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
