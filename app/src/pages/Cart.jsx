import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../store/cartSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handler = (id)=>{
    dispatch(removeCart(id))
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-40 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Your Cart</h1>
      {cartProducts.length > 0 ? (
        cartProducts.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-gray-300 py-6"
          >
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-lg mr-6 overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg text-gray-700 font-medium">
                {item.name}
              </span>
            </div>
            <span className="text-lg text-gray-600 font-semibold">
              ${item.rate}
            </span>
            <button onClick={()=>handler(item.id)} className="text-lg text-gray-600 font-semibold">
              remove
            </button>

          </div>
        ))
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
