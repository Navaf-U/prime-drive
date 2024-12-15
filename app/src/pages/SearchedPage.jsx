import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SearchedPage() {
  const { filteredProducts } = useSelector((state) => state.products); 

  if (!filteredProducts.length) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-600">No products found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 mt-10 min-h-screen p-5">
      <h1 className="text-2xl font-bold text-center text-[#8C3061] mb-8">Search Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <NavLink to={`/product/${item._id}`}>
            <img
              src={item.image} 
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            </NavLink>
            <h2 className="text-lg font-medium text-gray-800 mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.description || "No description available"}</p>
            <p className="text-[#8C3061] font-semibold">${item.rate || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchedPage;