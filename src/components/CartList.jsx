import toast from "react-hot-toast";
import { useAddToCart } from "../store/store";
import { IoMdClose } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";
export default function CartList() {
  const value = useAddToCart((state) => state.value);
  const removeFromCart = useAddToCart((state) => state.removeFromCart);

  return (
    <>
      <div className="cartList flex flex-col  lg:max-w-[50%] w-full py-10 lg:pr-6 h-[80vh] grow overflow-y-auto">
        <h1 className="text-black text-[24px] leading-[24px] font-[400]">
          Shopping Cart
        </h1>
        <div className="flex flex-col">
          {value.map((el, index) => (
            <div
              key={el.id}
              className="flex items-center justify-between text-black h-[200px] border-b border-gray-400 "
            >
              <div className="rightInfo flex gap-4 max-w-[50%] items-start">
                <img
                  className="w-[100px]"
                  src={el.image}
                  alt={`product ${el.id}`}
                />
                <div className="flex flex-col gap-4">
                  <p>{el.title}</p>
                  <p>#{el.id}</p>
                </div>
              </div>
              <div className="leftInfo flex flex-col justify-between h-full p-4 pb-12">
                <div className="flex gap-4">
                  <span className="font-[500] text-[22px]">${el.price}</span>
                  <IoMdClose
                    onClick={() => {
                      removeFromCart(index);
                      toast("Item is removed !", {
                        icon: <FaTrashCan className="text-red-600" />,
                      });
                    }}
                    className="text-black text-[22px] cursor-pointer"
                  />
                </div>
                <div className=" flex gap-2 items-center">
                  <span className="text-2xl">-</span>
                  <span className="border bg-gray-200 p-3">{el.qty}</span>
                  <span className="text-2xl">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
