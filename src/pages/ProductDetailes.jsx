import axios from "axios";
import { useEffect, useState } from "react";
import { domain, useAddToCart } from "../store/store";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { BsPatchCheck } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductDetailes() {
  const value = useAddToCart((state) => state.value);
  const addToCart = useAddToCart((state) => state.addToCart);
  const removeFromCart = useAddToCart((state) => state.removeFromCart);

  const params = useParams();

  const navigate = useNavigate();
  const endPoint = `/api/products/${params.productId}?populate=*`;
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(domain + endPoint)
      .then((res) => setProduct(res.data.data))
      .catch(() => {
        navigate("/404");
      });
  }, [params.productId]);

  const [itemIsHere, setItemIsHere] = useState(false);
  useEffect(() => {
    const isHere = value.some((el) => el.id == product.id);
    setItemIsHere(isHere);
  }, [value, product]);
  console.log(itemIsHere);
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="container px-3">
          <div className="flexParent flex gap-12 justify-center items-start flex-wrap lg:flex-nowrap py-10">
            <div className="imgDiv lg:w-1/2 h-[450px] w-full">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src={domain + product.img?.url}
                alt={product.name}
              />
            </div>
            <div className="textDiv lg:w-1/2 w-full flex flex-col gap-6">
              <h1 className="font-bold text-2xl text-black w-full">
                {product.name}
              </h1>
              <h3 className="font-bold text-2xl text-black w-full">
                ${product.price}{" "}
                <span className="text-[18px] line-through opacity-60 pl-2">
                  ${+product.price + 100}
                </span>
              </h3>
              <p className="text-black">
                Enhanced capabilities thanks toan enlarged display of 6.7
                inchesand work without rechargingthroughout the day. Incredible
                photosas in weak, yesand in bright lightusing the new systemwith
                two cameras
              </p>
              <div className="my-4 flex items-center justify-between flex-col lg:flex-row gap-4 lg:gap-0">
                <button className="btn btn-neutral lg:w-[calc(50%-1rem)] w-full py-6 text-[16px] bg-white text-black">
                  Add To Wishlist
                </button>
                {itemIsHere ? (
                  <button
                    onClick={() => {
                      const index = value.findIndex(
                        (el) => el.id == product.id
                      );
                      removeFromCart(index);
                      toast("Item is removed !", {
                        icon: <FaTrashCan className="text-red-600" />,
                      });
                    }}
                    className="btn btn-neutral lg:w-[calc(50%-1rem)] w-full py-6 text-[16px]"
                  >
                    <FaTrashCan />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      addToCart({
                        ...product,
                        qty: 1,
                        basePrice: product.price,
                      });
                      toast.success("Item is added !");
                    }}
                    className="btn btn-neutral lg:w-[calc(50%-1rem)] w-full py-6 text-[16px]"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
              <div className="flex justify-start items-center gap-8">
                <div className="flex gap-4  items-center justify-start w-1/3">
                  <CiDeliveryTruck className="text-gray-500 text-[45px] bg-[#F6F6F6] p-2 rounded-[11px]" />
                  <div className="flex flex-col">
                    <h4 className="text-[#717171] text-[14px] leading-[24px]">
                      Free Delivery
                    </h4>
                    <p className="text-[14px] leading-[24px] text-black">
                      1-2 day
                    </p>
                  </div>
                </div>
                <div className="flex gap-4  items-center justify-start w-1/3">
                  <CiShop className="text-gray-500 text-[45px] bg-[#F6F6F6] p-2 rounded-[11px]" />
                  <div className="flex flex-col">
                    <h4 className="text-[#717171] text-[14px] leading-[24px]">
                      In Stock
                    </h4>
                    <p className="text-[14px] leading-[24px] text-black">
                      Today
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-start w-1/3">
                  <BsPatchCheck className="text-gray-500 text-[45px] bg-[#F6F6F6] p-2 rounded-[11px]" />
                  <div className="flex flex-col">
                    <h4 className="text-[#717171] text-[14px] leading-[24px]">
                      Guaranteed
                    </h4>
                    <p className="text-[14px] leading-[24px] text-black">
                      1 year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
