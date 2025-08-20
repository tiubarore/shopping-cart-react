import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState();
  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Armazon</h1>

      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="cursor-pointer"
        >
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-80 bg-white text-black border rounded shadow-lg z-50">
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty...</p>
              ) : (
                <>
                  <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                    {cart.map((item) => (
                      <li className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            {item.qty} x ${item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="cursor-pointer text-sm text-secondary hover:underline "
                        >
                          Remove {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                  <button
                    onClick={clearCart}
                    className="btn btn-secondary w-full mt-4"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
