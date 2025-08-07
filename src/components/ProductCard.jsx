import toast from "react-hot-toast";
import { useAddToCart } from "../store/store";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function ProductCard({ product }) {
  const value = useAddToCart((state) => state.value);
  const removeFromCart = useAddToCart((state) => state.removeFromCart);
  const addToCart = useAddToCart((state) => state.addToCart);
  const [itemIsHere, setItemIsHere] = useState(false);
  useEffect(() => {
    const isHere = value.some((el) => el.id == product.id);
    setItemIsHere(isHere);
  }, [value.length]);

  const paragraphStyle = "text-black font-[600] text-[15px] leading-[24px]";
  return (
    <div className="hover:bg-gray-100 cursor-alias rounded-[8px] duration-150 cardItem flex flex-col gap-3 p-4 items-start justify-center">
      <img
        className="w-full h-[220px] object-fill"
        src={product.image}
        alt={`product${product.id}`}
      />
      <p className={paragraphStyle}>{product.title}</p>
      <p className={paragraphStyle}>${product.price}</p>
      {itemIsHere ? (
        <button
          onClick={() => {
            const index = value.findIndex((el) => el.id == product.id);
            removeFromCart(index);
            toast("Item is removed !", {
              icon: <FaTrashCan className="text-red-600" />,
            });
          }}
          className="btn btn-neutral w-full text-2xl"
        >
          <FaTrashCan />
        </button>
      ) : (
        <button
          onClick={() => {
            addToCart({ ...product, qty: 1, basePrice: product.price });
            toast.success("Item is added !");
          }}
          className="btn btn-neutral w-full"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}
