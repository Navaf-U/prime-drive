import { useParams } from "react-router-dom";
import { add } from "../Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductsView() {
  const { id } = useParams();

  const { products, premiumProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addToCart = (products) => {
    dispatch(add(products));
  };

  const selectedProduct = products?.find((item) => item._id == id);
  const selectedPremiumProduct = premiumProducts?.find((item) => item.id == id);
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20">
      {selectedProduct || selectedPremiumProduct ? (
        <>
          {selectedProduct && (
            <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden mb-10">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">
                  {selectedProduct.name}
                </h1>
                <h2 className="text-lg text-gray-700 mb-1">
                  {selectedProduct.company}
                </h2>
                <p className="text-sm text-gray-500">
                  Model: {selectedProduct.model}
                </p>
                <p className="text-sm text-gray-500">
                  Years Old: {selectedProduct.years_old}
                </p>
                <p className="text-sm text-gray-500">
                  Rate: ${selectedProduct.rate}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {selectedProduct.description}
                </p>

                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}

          {selectedPremiumProduct && (
            <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden mb-10">
              <img
                src={selectedPremiumProduct.image}
                alt={selectedPremiumProduct.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">
                  {selectedPremiumProduct.name}
                </h1>
                <h2 className="text-lg text-gray-700 mb-1">
                  {selectedPremiumProduct.company}
                </h2>
                <p className="text-sm text-gray-500">
                  Model: {selectedPremiumProduct.model}
                </p>
                <p className="text-sm text-gray-500">
                  Years Old: {selectedPremiumProduct.years_old}
                </p>
                <p className="text-sm text-gray-500">
                  Rate: ${selectedPremiumProduct.rate}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {selectedPremiumProduct.description}
                </p>

                <button
                  onClick={() => addToCart(selectedPremiumProduct)}
                  className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <h1 className="text-red-500 text-xl">Product not found</h1>
      )}
    </div>
  );
}

export default ProductsView;
