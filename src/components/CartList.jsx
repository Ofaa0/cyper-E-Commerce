import toast from "react-hot-toast";
import { useAddToCart } from "../store/store";
import { IoMdClose } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";
export default function CartList() {
  const value = useAddToCart((state) => state.value);
  const removeFromCart = useAddToCart((state) => state.removeFromCart);
  const increseQTY = useAddToCart((state) => state.increseQTY);
  const decreseQTY = useAddToCart((state) => state.decreseQTY);
  

  return (
    <>
      <div className="cartList flex flex-col  lg:max-w-[50%] w-full py-10 lg:pr-6 h-[80vh] grow overflow-y-auto">
        <h1 className="text-black text-[24px] leading-[24px] font-[400] mb-3">
          Shopping Cart
        </h1>
        <div className="flex flex-col">
          {value.map((el, index) => (
            <div
              key={el.id}
              className="flex items-center justify-between text-black border-b border-gray-400 py-3 "
            >
              <div className="leftInfo flex gap-4 lg:max-w-[70%] items-start">
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
              <div className="rightInfo flex flex-col justify-between h-full p-4 pb-12">
                <div className="flex gap-4">
                  <span className="font-[500] text-[22px] mb-4">
                    ${el.price}
                  </span>
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
                  <span onClick={()=>decreseQTY(index)} className="text-2xl cursor-pointer">-</span>
                  <span className="border border-gray-200 bg-gray-100 px-3 p-1">
                    {el.qty}
                  </span>
                  <span onClick={()=>increseQTY(index)} className="text-2xl cursor-pointer">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
