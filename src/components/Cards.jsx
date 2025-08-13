import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { domain, selectedCat } from "../store/store";

export default function Cards() {
  const value = selectedCat((state) => state.value);
  const endPoint = "/api/products?populate=*&pagination[pageSize]=62";
  const URL = domain + endPoint;
  const [productsList, setProductsLIst] = useState([]);
  const [view, setView] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setProductsLIst(res.data.data);
        setView(res.data.data);
        setLoaded(false);
      })
      .catch(() => setLoaded(false));
  }, []);
  useEffect(() => {
    if (value?.id) {
      const endPoint1 = `/api/categories/${value.documentId}`;
      console.log(value);
      axios
        .get(domain + endPoint1, {
          params: {
            populate: {
              products: {
                populate: "*",
              },
            },
          },
        })
        .then((res) => {
          setView(res.data.data.products || []);
          setLoaded(false);
        })
        .catch(() => setLoaded(false));
    }
  }, [value]);
  return (
    <>
      <div className="pb-3 lg:pl-8 grow">
        <h1 className="text-[#6C6C6C]">
          Available Products:{" "}
          <span className="text-black font-bold">
            {value?.id ? view.length : productsList.length}
          </span>
        </h1>
        {loaded ? (
          <div className="flex flex-col bg-neutral-300 w-[300px] h-[400px] animate-pulse rounded-xl mt-4 p-4 gap-4">
            <div className="bg-neutral-400/50 w-full h-[200px] animate-pulse rounded-md"></div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {value?.id
              ? view.map((el) => (
                  <ProductCard key={el.documentId} product={el} />
                ))
              : productsList.map((el) => (
                  <ProductCard key={el.documentId} product={el} />
                ))}
          </div>
        )}
      </div>
    </>
  );
}
