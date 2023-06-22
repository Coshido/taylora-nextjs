import React from "react";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-col justify-center pt-12 gap-8 h-40 w-full">
      <h1 className="text-[48px] font-bold font-lato text-t-grey">
        Product Builder
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
