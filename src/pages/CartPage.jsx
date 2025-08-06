import CartList from "../components/CartList";
import CheckoutBox from "../components/CheckoutBox";
export default function CartPage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container px-3">
          <div className="flex justify-between items-start flex-wrap">
            <CartList />
            <CheckoutBox />
          </div>
        </div>
      </div>
    </>
  );
}
