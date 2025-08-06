import Logo from "../assets/Logo.png";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="w-full bg-black flex justify-center items-center">
      <div className="container pt-[104px] pb-[144px]">
        <div className="felx flex-col">
          <div className="footerText grid grid-cols-1 lg:grid-cols-3">
            <div className="firstCol flex justify-center flex-col items-center lg:block mb-4 lg:mb-0 text-center lg:text-left">
              <img className="invert mb-6 " src={Logo} alt="" />
              <p className="text-[14px] font-[500] leading-[171%]">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            <div className="secCol mb-4 lg:mb-0 text-center lg:text-left lg:pl-18 flex flex-col gap-2">
              <h1 className="text-[16px]">Services</h1>
              <p className="text-[#CFCFCF] text-[14px]">Bonus program</p>
              <p className="text-[#CFCFCF] text-[14px]">Gift cards</p>
              <p className="text-[#CFCFCF] text-[14px]">Credit and payment</p>
              <p className="text-[#CFCFCF] text-[14px]">Service contracts</p>
              <p className="text-[#CFCFCF] text-[14px]">Non-cash account</p>
              <p className="text-[#CFCFCF] text-[14px]">Payment</p>
            </div>
            <div className="thirdCol mb-4 lg:mb-0 text-center lg:text-left lg:pl-8 flex flex-col gap-2">
              <h1 className="text-[16px]">Assistance to the buyer</h1>
              <p className="text-[#CFCFCF] text-[14px]">Find an order</p>
              <p className="text-[#CFCFCF] text-[14px]">Terms of delivery</p>
              <p className="text-[#CFCFCF] text-[14px]">
                Exchange and return of goods
              </p>
              <p className="text-[#CFCFCF] text-[14px]">Guarantee</p>
              <p className="text-[#CFCFCF] text-[14px]">
                Frequently asked questions
              </p>
              <p className="text-[#CFCFCF] text-[14px]">
                Terms of use of the site
              </p>
            </div>
          </div>
          <div className="footericons flex pt-8 gap-9 w-full justify-center lg:justify-start items-center ">
            <IoLogoTwitter className="cursor-pointer text-[20px]" />
            <FaFacebookF className="cursor-pointer text-[20px]" />
            <FaTiktok className="cursor-pointer text-[20px]" />
            <AiFillInstagram className="cursor-pointer text-[20px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
