import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { domain, selectedCat } from "../store/store";

export default function SideFilterBar() {
  
  let checkboxStyle = `text-[15px] font-[500] leading-[24px] flex gap-3`;
  const [toggleFilter, setToggleFilter] = useState(false);
  const value = selectedCat((state) => state.value);
  const resetCat = selectedCat((state) => state.resetCat);
  const filteredCat = selectedCat((state) => state.filteredCat);
  const changeToggleState = () => {
    setToggleFilter(!toggleFilter);
  };

  const endPoint = "/api/categories?populate[products][populate]=*";
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get(domain + endPoint)
      .then((res) => {
        setCats(res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="min-w-[256px] lg:w-[256px] w-full pb-4 lg:pb-0">
      <div className="w-full flex justify-between items-center border-b border-[#B5B5B5] text-black py-3">
        <h1 className="categories font-bold">Categories</h1>
        <IoIosArrowDown
          onClick={changeToggleState}
          className={`cursor-pointer font-bold duration-100 ${
            toggleFilter ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden origin-top duration-150  ${
          toggleFilter ? "scale-0 h-0" : "scale-100"
        }`}
      >
        <div
          className={`relative top-0 left-0 w-full duration-[1s] ${
            toggleFilter ? "translate-y-[-800px]" : "translate-y-0"
          }`}
        >
          <div className="w-full h-[56px] relative rounded-[8px] overflow-hidden  my-4">
            <input
              className="input w-full h-full py-2 px-4 pl-12 bg-[#F5F5F5] placeholder:text-[#656565] text-black"
              type="search"
              placeholder="Search"
            />
            <CiSearch className="absolute text-[#656565] z-[5] top-[50%] left-[10px] -translate-y-1/2 text-[24px]" />
          </div>

          <div className="checkBoxList text-black flex flex-col gap-2">
            <label
                className={checkboxStyle}
                onClick={resetCat}
              >
                <input
                  type="radio"
                  name="catCheck"
                  onChange={() => {}} // لازم عشان React ما يزعقش
                  className="checkbox checkbox-neutral w-[18px] h-[18px] rounded-[3px] self-center"
                />
                All
              </label>
            {cats?.map((el, index) => (
              <label
                key={el.documentId}
                className={checkboxStyle}
                onClick={() => filteredCat(el)}
              >
                <input
                  type="radio"
                  name="catCheck"
                  defaultChecked={el.isChecked}
                  onChange={() => {}} // لازم عشان React ما يزعقش
                  className="checkbox checkbox-neutral w-[18px] h-[18px] rounded-[3px] self-center"
                />
                {el.name}
              </label>
            ))}
          </div>

          <button className="btn bg-black text-white w-full rounded-[8px] font-[500] text-[15px] leading-[24px] mt-4">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
