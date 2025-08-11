import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { domain } from "../store/store";

export default function Cards() {  
  const endPoint = "/api/products?populate=*&pagination[pageSize]=61";
  const URL = domain + endPoint;
  const [productsList, setProductsLIst] = useState([]);
  const [loaded, setLoaded] = useState(true);


  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setProductsLIst(res.data.data);
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
              <ProductCard key={el.documentId} product={el} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
