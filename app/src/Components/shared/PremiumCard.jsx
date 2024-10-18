import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsProvider";

/* eslint-disable react/prop-types */
function PremiumCard() {
  const { setLoading } = useContext(ProductsContext);
  const [premiumCars, setPremiumCars] = useState([]);

  useEffect(() => {
    const fetchPremiumProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3000/premiumCars");
        setPremiumCars(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPremiumProduct();
  }, [setLoading]);

  return (
    <div className="flex flex-wrap justify-center mx-auto my-10 gap-5">
      {premiumCars &&
        premiumCars.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col w-[300px] h-[500px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="w-full h-72 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.model}
                />
              </div>
              <div className="px-6 py-4 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-md text-gray-500 mt-1">{item.company}</p>
                <p className="text-sm text-gray-400">{item.model}</p>

                <p className="text-md font-semibold text-green-600 mt-3">{item.rate}₹</p>
                <p className="text-md text-gray-500 mt-1">{item.years_old} years old</p>

                <p className="text-sm mt-4 text-gray-700 flex-grow">{item.description}</p>
              </div>

              <div className="px-6 pt-2 pb-6 mt-auto">
                <NavLink
                  to="/premium-cars"
                  className="block w-full text-center rounded-md bg-[#522258] px-4 py-3 text-white font-medium text-lg hover:bg-[#431a49] transition-all"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default PremiumCard;
