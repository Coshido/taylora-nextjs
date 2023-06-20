"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
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
        href="/colors"
        className={`p-1 ${pathname == "/colors" ? activeClass : ""}`}
      >
        COLORS
      </Link>
      <Link
        href="/accessories"
        className={`p-1 ${pathname == "/accessories" ? activeClass : ""}`}
      >
        ACCESSORIES
      </Link>
      <Link
        href="/summary"
        className={`p-1 ${pathname == "/summary" ? activeClass : ""}`}
      >
        SUMMARY
      </Link>
    </div>
  );
};

export default Navbar;
