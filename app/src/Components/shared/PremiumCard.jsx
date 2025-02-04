import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchPremiumProducts } from "../../Slices/productsSlice";

function PremiumCard() {
  const dispatch = useDispatch();
  const { premiumProducts, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchPremiumProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center">Loading premium products...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="flex flex-wrap justify-center mx-auto my-10 gap-5 px-4 md:px-10">
      {premiumProducts &&
        premiumProducts.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col w-full sm:w-[300px] h-auto overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="w-full h-60 sm:h-72 overflow-hidden rounded-t-lg">
                <NavLink to={`product/${item.id}`}>
                  <img className="w-full h-full object-cover" src={item.image} alt={item.model} />
                </NavLink>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-md text-gray-500 mt-1">{item.company}</p>
                <p className="text-sm text-gray-400">{item.model}</p>
                <p className="text-md font-semibold text-green-600 mt-3">{item.rate}₹</p>
                <p className="text-md text-gray-500 mt-1">{item.years_old} years old</p>
                <p className="text-sm mt-4 text-gray-700 flex-grow">{item.description}</p>
              </div>
              <div className="p-4 mt-auto">
                <NavLink
                  to={`product/${item.id}`}
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
