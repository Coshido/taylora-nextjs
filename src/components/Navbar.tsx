"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProduct } from "../context/ProductContext";

type Props = {};

const Navbar = (props: Props) => {
  const { model, setShowPopUp } = useProduct();
  const pathname = usePathname();

  const activeClass = "text-c-active border-b-2 border-b-c-active";

  return (
    <div className="flex gap-2 justify-center font-lato text-[14px] font-bold text-t-lightgrey tracking-[1.4px]">
      <Link
        href="/models"
        className={`p-1 ${pathname == "/models" ? activeClass : ""}`}
      >
        MODELS
      </Link>
      <Link
        href={model === "" ? "" : "/colors"}
        className={`p-1 ${pathname == "/colors" ? activeClass : ""} ${
          model === "" ? "text-[#d1d1d1]" : ""
        }`}
        onClick={() => {
          model === "" ? setShowPopUp(true) : setShowPopUp(false);
        }}
      >
        COLORS
      </Link>
      <Link
        href={model === "" ? "" : "/accessories"}
        className={`p-1 ${pathname == "/accessories" ? activeClass : ""}${
          model === "" ? "text-[#d1d1d1]" : ""
        }`}
        onClick={() => {
          model === "" ? setShowPopUp(true) : setShowPopUp(false);
        }}
      >
        ACCESSORIES
      </Link>
      <Link
        href={model === "" ? "" : "/summary"}
        className={`p-1 ${pathname == "/summary" ? activeClass : ""}${
          model === "" ? "text-[#d1d1d1]" : ""
        }`}
        onClick={() => {
          model === "" ? setShowPopUp(true) : setShowPopUp(false);
        }}
      >
        SUMMARY
      </Link>
    </div>
  );
};

export default Navbar;
