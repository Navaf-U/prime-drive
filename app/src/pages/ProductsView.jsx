import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsProvider";
import { useParams } from "react-router-dom";

function ProductsView() {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();

  const selectedProduct = products.find((item) => item.id == id);
  console.log(selectedProduct);

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20">
      {selectedProduct ? (
        <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
            <h2 className="text-lg text-gray-700 mb-1">{selectedProduct.company}</h2>
            <p className="text-sm text-gray-500">Model: {selectedProduct.model}</p>
            <p className="text-sm text-gray-500">Years Old: {selectedProduct.years_old}</p>
            <p className="text-sm text-gray-500">Rate: ${selectedProduct.rate.toLocaleString()}</p>
            <p className="text-sm text-gray-700 mt-2">{selectedProduct.description}</p>
          </div>
        </div>
      ) : (
        <h1 className="text-red-500 text-xl">Product not found</h1>
      )}
    </div>
  );
}

export default ProductsView;
