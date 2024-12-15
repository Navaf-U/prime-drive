import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Slices/cartSlice";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";
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
               <Link to={`/product/${item.id}`}>
               <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
               </Link>
              </div>
              <span className="text-lg text-gray-700 hover:text-[#8C3061] font-medium">
                {item.name}
              </span>
            </div>
            <span className="text-lg text-gray-600 font-semibold hover:text-[#8C3061]">
              ${item.totalPrice}
            </span>
            <span className="text-lg flex text-gray-600 font-semibold justify-center items-center hover:text-[#8C3061]">
            <MdProductionQuantityLimits size={22} /> &nbsp; : <span className="text-1xl"> &nbsp;{item.quantity}</span>
            </span>
            <button onClick={()=>handler(item.id)} className="text-lg text-gray-600 font-semibold">
            <CiCircleRemove size={50} className="hover:text-[#8C3061]" />
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
