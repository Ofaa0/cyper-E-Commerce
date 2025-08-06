import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
export default function SideFilterBar() {
    let checkboxStyle = `text-[15px] font-[500] leading-[24px] flex gap-3`;
  const [toggleFilter, setToggleFilter] = useState(false);
  const changeToggleState = () => {
    setToggleFilter(!toggleFilter);
  };
  const [filters, setFilters] = useState([
    { label: "smartphones", isChecked: false },
    { label: "laptops", isChecked: false },
    { label: "skincare", isChecked: false },
    { label: "sunglasses", isChecked: false },
    { label: "motorcycle", isChecked: false },
    { label: "lighting", isChecked: false },
    { label: "furniture", isChecked: false },
    { label: "men shirts", isChecked: false },
    { label: "women bags", isChecked: false },
  ]);
  const toggleCheckbox = (index) => {
    const newFilters = [...filters];
    newFilters[index].isChecked = !newFilters[index].isChecked;
    setFilters(newFilters);
  };
  return (
    <>
      <div className=" min-w-[256px] lg:w-[256px] w-full pb-4 lg:pb-0">
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
            className={` relative top-0 left-0 w-full duration-[1s] ${
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
              {filters.map((el, index) => (
                <label
                  key={index}
                  className={checkboxStyle}
                  onClick={() => {
                    toggleCheckbox(index);
                    console.log(el.isChecked);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={el.isChecked}
                    onChange={() => {}} // لازم يكون موجود عشان React يتحكم فيه
                    className="checkbox checkbox-neutral w-[18px] h-[18px] rounded-[3px] self-center"
                  />
                  {el.label}
                </label>
              ))}
            </div>
            <button className="btn bg-black text-white w-full rounded-[8px] font-[500] text-[15px] leading-[24px] mt-4">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
