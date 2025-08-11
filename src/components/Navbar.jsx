import Logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddToCart } from "../store/store";
import CartPage from "../pages/CartPage";

export default function Navbar() {
  const value = useAddToCart((state) => state.value);
  let linkStyle =
    "text-[#656565] font-[500] text-[16px] hover:text-black duration-200";
  const iconsStyle = "text-[28px] cursor-pointer text-black";
  const [toggleState, setToggleState] = useState(true);
  const toggleMenu = () => {
    setToggleState(!toggleState);
  };

  return (
    <header className="w-full flex justify-center items-center h-[88px] border-b border-[#B5B5B5]">
      <div className="container h-full px-3 relative">
        <div className="h-full w-full flex justify-between gap-[62px] items-center">
          <img
            className="w-[65px] h-[23px] object-cover"
            src={Logo}
            alt="logo image"
          />
          <div
            className={`bg-white border-b border-[#B5B5B5] lg:border-0 z-[110] w-full lg:flex justify-between flex-col lg:flex-row gap-3 absolute lg:static px-3 top-[88px] left-0 items-center py-3 lg:py-0 transition duration-200 ${
              toggleState
                ? "translate-x-[-800px] lg:translate-x-[0px]"
                : "translate-x-[0px]"
            }`}
          >
            <div className="w-full lg:w-[372px] h-[56px] relative rounded-[8px] overflow-hidden">
              <input
                className="input w-full h-full p-4 pl-12 bg-[#F5F5F5] placeholder:text-[#656565] text-black"
                type="search"
                placeholder="Search"
              />
              <CiSearch className="absolute text-[#656565] z-[5] top-[50%] left-[10px] -translate-y-1/2 text-[24px]" />
            </div>
            <nav className="flex lg:items-center gap-4 lg:gap-[52px] flex-col lg:flex-row items-start py-4 lg:py-0">
              <Link onClick={toggleMenu} className={linkStyle} to="/">
                Home
              </Link>
              <Link onClick={toggleMenu} className={linkStyle} to="/about">
                About
              </Link>
              <Link onClick={toggleMenu} className={linkStyle} to="/contact">
                Contact Us
              </Link>
              <Link onClick={toggleMenu} className={linkStyle} to="/contact">
                Blog
              </Link>
            </nav>
            <div className="list-icons flex items-center gap-6 text-gray-900">
              <IoMdHeartEmpty className={iconsStyle} />
              <Link to={"/cart"}>
                <div onClick={toggleMenu} className="relative">
                  <IoCartOutline className={iconsStyle} />
                  {value.length > 0 && (
                    <p className="felx justify-center items-center rounded-full top-[-14px] right-[-14px]  px-[8px] py-[1px] bg-black text-white absolute">
                      {value.length}
                    </p>
                  )}
                </div>
              </Link>
              <FiUser className={iconsStyle} />
            </div>
          </div>
          <FiMenu onClick={toggleMenu} className={`lg:hidden ${iconsStyle}`} />
        </div>
      </div>
    </header>
  );
}
