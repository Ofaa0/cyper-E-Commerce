import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Cards() {
  const domain = "https://fakestoreapi.com";
  const endPoint = "/products";
  const URL = domain + endPoint;
  const [productsList, setProductsLIst] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setProductsLIst(res.data);
        setLoaded(!loaded);
      })
      .catch(() => setLoaded(!loaded));
  }, []);

  return (
    <>
      <div className="pb-3 lg:pl-8 grow">
        <h1 className="text-[#6C6C6C]">
          Available Products:{" "}
          <span className="text-black font-bold">{productsList.length}</span>
        </h1>
        {loaded ? (
          <div className="felx justify-center items-center w-full h-[50vh]">

          <span className="loading loading-spinner text-neutral w-[50%]"></span>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {productsList.map((el) => (
              <ProductCard key={el.id} product={el} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
