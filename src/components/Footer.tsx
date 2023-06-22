"use client";
import React, { useCallback, useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchAll } from "../lib/fetchAll";

type Props = {};

const Footer = (props: Props) => {
  const { price, setPrice } = useProduct();
  const { model } = useProduct();
  const { color } = useProduct();
  const { accessories } = useProduct();

  const pathname = usePathname();
  const router = useRouter();
  const data = fetchAll();

  const buttonClass =
    "w-48 h-14 rounded-full text-white text-[14px] font-bold flex justify-between px-8 items-center ";

  const renderButton = () => {
    switch (pathname) {
      case "/colors":
        return (
          <div className="flex gap-5">
            <Link
              href="/models"
              className="h-14 w-14 rounded-full bg-[#EDEDED] items-center flex justify-center"
            >
              <Image
                src="/arrow-grey.png"
                alt="Arrow back"
                width="16"
                height="16"
                sizes="100vw"
                className="rotate-180"
              />
            </Link>
            <Link href="/accessories" className={`bg-c-active ${buttonClass}`}>
              <p>ACCESSORIES</p>
              <Image
                src="/arrow-white.png"
                alt="Arrow next"
                width="16"
                height="16"
                sizes="100vw"
                className="self-center"
              />
            </Link>
          </div>
        );
      case "/accessories":
        return (
          <div className="flex gap-5">
            <Link
              href="/colors"
              className="h-14 w-14 rounded-full bg-[#EDEDED] items-center flex justify-center"
            >
              <Image
                src="/arrow-grey.png"
                alt="Arrow back"
                width="16"
                height="16"
                sizes="100vw"
                className="rotate-180"
              />
            </Link>
            <Link href="/summary" className={`bg-c-active ${buttonClass}`}>
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
          </div>
        );
      case "/summary":
        return (
          <div className="flex gap-5">
            <Link
              href="/accessories"
              className="h-14 w-14 rounded-full bg-[#EDEDED] items-center flex justify-center"
            >
              <Image
                src="/arrow-grey.png"
                alt="Arrow back"
                width="16"
                height="16"
                sizes="100vw"
                className="rotate-180"
              />
            </Link>
            <Link href="/summary" className={`bg-c-active ${buttonClass}`}>
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
          </div>
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

  return (
    <div className="w-full h-[120px] static bottom-0 px-8 flex justify-between shadow-[0px_0px_39px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col self-center">
        <p className="text-t-lightgrey text-[16px] font-lato ">Total</p>
        <b className="text-t-grey text-[32px] font-lato font-light">${price}</b>
      </div>
      <div>{model}</div>
      <div>{color}</div>
      <div>{accessories}</div>
      <div className="self-center">{renderButton()}</div>
    </div>
  );
};

export default Footer;
