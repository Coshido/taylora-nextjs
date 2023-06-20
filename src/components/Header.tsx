import React from "react";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-col justify-center pt-10 gap-10">
      <h1 className="text-[38px] font-bold font-lato text-t-grey">
        Product Builder
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
