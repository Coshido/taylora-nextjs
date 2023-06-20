"use client";
import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  const { price, setPrice } = useProduct();
  const { model } = useProduct();
  const { color } = useProduct();

  const pathname = usePathname();
  const router = useRouter();

  const buttonClass =
    "w-48 h-14 rounded-full text-white text-[14px] font-bold flex justify-between px-8 bg-c-active items-center ";

  const renderButton = () => {
    switch (pathname) {
      case "/colors":
        return (
          <Link href="/accessories" className={buttonClass}>
            <p>ACCESSORIES</p>
            <Image
              src="/arrow-white.png"
              alt="Arrow"
              width="16"
              height="16"
              sizes="100vw"
              className="self-center"
            />
          </Link>
        );
      case "/accessories":
        return (
          <Link href="/summary" className={buttonClass}>
            <p>SUMMARY</p>
            <Image
              src="/arrow-white.png"
              alt="Arrow"
              width="16"
              height="16"
              sizes="100vw"
              className="self-center"
            />
          </Link>
        );
      case "/summary":
        return (
          <Link href="/summary" className={buttonClass}>
            <p>BUY NOW</p>
            <Image
              src="/arrow-white.png"
              alt="Arrow"
              width="16"
              height="16"
              sizes="100vw"
              className="self-center"
            />
          </Link>
        );
      default:
        return (
          <button
            className={`${buttonClass} ${
              model ? "bg-c-active" : "bg-[#AEBDC4]"
            }`}
            onClick={() => (model ? router.push("/colors") : undefined)}
          >
            <p className="self-center">COLORS</p>
            <Image
              src="/arrow-white.png"
              alt="Arrow"
              width="16"
              height="16"
              sizes="100vw"
              className="self-center"
            />
          </button>
        );
    }
  };

  useEffect(() => {});

  return (
    <div className="w-full h-[120px] px-8 flex justify-between shadow-[0px_0px_39px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col self-center">
        <p className="text-t-lightgrey text-[16px] font-lato ">Total</p>
        <b className="text-t-grey text-[32px] font-lato font-light">${price}</b>
      </div>
      <div>{color}</div>
      <div className="self-center">{renderButton()}</div>
    </div>
  );
};

export default Footer;
