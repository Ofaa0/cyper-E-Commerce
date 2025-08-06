import { useEffect, useState } from "react";
import { useAddToCart } from "../store/store";
export default function CheckoutBox() {
  let sum = 0;
  const value = useAddToCart((state) => state.value);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    value.map((el) => (sum += el.price));
    setSubTotal(sum);
  }, [value]);
  return (
    <>
      <div className="checkoutBox text-black lg:w-[50%] w-full py-4">
        <div className="flex flex-col grow px-4 lg:px-16 py-14 g:max-w-[50%] border border-gray-300 my-1 rounded-[10px]">
          <h1 className="leading-[20px] text-[16px] font-[600] mb-10">
            Order Summary
          </h1>
          <label htmlFor="codeInp" className="mb-[24px]">
            Discount code / Promo code <br />
            <input
              id="codeInp"
              className="input bg-white w-full border border-gray-300 py-7"
              type="text"
              placeholder="Code"
            />
          </label>
          <label htmlFor="bonusInp" className="mb-[24px] relative w-full">
            Your bonus card number <br />
            <input
              id="bonusInp"
              className="input bg-white w-full border border-gray-300 py-7"
              type="text"
              placeholder="Enter Card Number"
            />
            <button className="btn bg-white text-black border border-black rounded-[8px] z-30 absolute right-[16px] top-[32px] px-6">
              Apply
            </button>
          </label>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-[600]">Subtotal</h3>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h3>Estimated Tax</h3>
            <p>${value.length == 0 ? 0 : 50}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h3>Estimated shipping & Handling</h3>
            <p>${value.length == 0 ? 0 : 30}</p>
          </div>
          <div className="flex justify-between items-center mb-12">
            <h3 className="font-[600]">Total</h3>
            <p>${subTotal + (value.length == 0 ? 0 : 80)}</p>
          </div>
          <button className="w-full btn btn-neutral">Checkout</button>
        </div>
      </div>
    </>
  );
}
