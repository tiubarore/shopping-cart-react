import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="cursor-pointer card bg-base-100  shadow-sm">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
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
          className="btn btn-secondary hover:bg-pink-700 hover:border-pink-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
