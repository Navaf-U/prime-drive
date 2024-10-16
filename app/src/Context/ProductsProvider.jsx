import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
  };

  return (
    <div><ProductsContext.Provider value={value}>{children}</ProductsContext.Provider></div>
  );
}

export default ProductsProvider;
