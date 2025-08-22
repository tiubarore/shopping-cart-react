import { useCart } from "../context/CartContext";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="cursor-pointer card bg-base-100  shadow-sm">
      <Link to={`/product/${product.id}`}>
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
