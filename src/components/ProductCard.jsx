import toast from "react-hot-toast";
import { useAddToCart } from "../store/store";

export default function ProductCard({ product }) {
  const addToCart = useAddToCart((state) => state.addToCart);
  const paragraphStyle = "text-black font-[600] text-[15px] leading-[24px]";
  return (
    <div className="cardItem flex flex-col gap-3 p-4 items-start justify-center">
      <img
        className="w-full h-[220px] object-fill"
        src={product.image}
        alt={`product${product.id}`}
      />
      <p className={paragraphStyle}>{product.title}</p>
      <p className={paragraphStyle}>${product.price}</p>
      <button
        onClick={() => {
          addToCart({ ...product, qty: 1 });
          toast.success("Item is added !");
        }}
        className="btn btn-neutral w-full"
      >
        Add To Cart
      </button>
    </div>
  );
}
