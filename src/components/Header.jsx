import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Armazon</h1>

      <div className="relative">
        <button className="cursor-pointer">
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
export default Header;
