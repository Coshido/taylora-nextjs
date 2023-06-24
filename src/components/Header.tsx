"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <>
      <header className="hidden lg:flex flex-col sticky top-0 justify-center pt-12 gap-8 min-h-40 w-full bg-white shadow-[0px_40px_30px_rgba(255,255,255)]">
        <h1 className="text-[48px] font-bold font-lato text-t-grey">
          Product Builder
        </h1>
        <Navbar />
      </header>
      <div className="lg:hidden py-8">
        {pathname === "/models" ? (
          <h1 className=" text-[48px] font-lato text-t-grey ">Select Model:</h1>
        ) : null}
        {pathname === "/colors" ? (
          <h1 className=" text-[48px] font-lato text-t-grey ">Select Color:</h1>
        ) : null}
        {pathname === "/accessories" ? (
          <h1 className=" text-[48px] font-lato text-t-grey ">
            Select Accessories:
          </h1>
        ) : null}
        {pathname === "/summary" ? (
          <h1 className=" text-[48px] font-lato text-t-grey ">Summary:</h1>
        ) : null}
      </div>
    </>
  );
};

export default Header;
