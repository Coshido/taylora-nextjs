"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { fetchAll } from "../lib/fetchAll";

type Props = {};

const Footer = (props: Props) => {
  const [imgLink, setImgLink] = useState("");
  const { showPopUp, setShowPopUp } = useProduct();

  const { price, model, color } = useProduct();

  const pathname = usePathname();
  const router = useRouter();
  const data = fetchAll();

  const getImage = useCallback(
    (color: string) => {
      if (model == "") {
        setImgLink("");
      } else {
        const modelData = data.filter((ele) => ele.model == model);
        if (color === "") {
          setImgLink(modelData[0]?.variations[0].image);
        } else {
          const variant = modelData[0]?.variations.filter(
            (ele) => ele.color == color
          );
          setImgLink(variant[0]?.image);
        }
      }
    },
    [data, model]
  );

  useEffect(() => {
    getImage(color);
  }, [color, getImage]);

  useEffect(() => {
    if (model !== "") {
      setShowPopUp(false);
    }
  }, [model, setShowPopUp]);

  const buttonClass =
    "md:w-48 h-14 md:rounded-full text-white text-[14px] font-bold flex justify-between px-8 items-center ";

  const renderButton = () => {
    switch (pathname) {
      case "/colors":
        return (
          <div className="flex md:gap-5">
            <Link
              href="/models"
              className="h-14 w-[50vw] md:w-14 md:rounded-full bg-white md:bg-[#EDEDED] items-center flex md:justify-center justify-between px-8 md:px-0 font-bold text-t-lightgrey"
            >
              <Image
                src="/arrow-grey.png"
                alt="Arrow back"
                width="16"
                height="16"
                sizes="100vw"
                className="rotate-180"
              />
              <p className="md:hidden">MODELS</p>
              <div className="invisible" />
            </Link>
            <Link
              href="/accessories"
              className={`bg-c-active w-[50vw] ${buttonClass}`}
            >
              <div className="invisible" />
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
          <div className="flex md:gap-5">
            <Link
              href="/colors"
              className="h-14 w-[50vw] md:w-14 md:rounded-full bg-white md:bg-[#EDEDED] items-center flex md:justify-center justify-between px-8 md:px-0 font-bold text-t-lightgrey"
            >
              <Image
                src="/arrow-grey.png"
                alt="Arrow back"
                width="16"
                height="16"
                sizes="100vw"
                className="rotate-180"
              />
              <p className="md:hidden">COLORS</p>
              <div className="invisible" />
            </Link>
            <Link
              href="/summary"
              className={`bg-c-active w-[50vw] ${buttonClass}`}
            >
              <div className="invisible" />
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
          <div className="flex md:gap-5">
            <Link
              href="/accessories"
              className="h-14 w-[50vw] md:w-14 md:rounded-full bg-white md:bg-[#EDEDED] items-center flex md:justify-center justify-between px-8 md:px-0 font-bold text-t-lightgrey"
            >
              <Image
                src="/arrow-grey.png"
                alt="Arrow back"
                width="16"
                height="16"
                sizes="100vw"
                className="rotate-180"
              />
              <p className="md:hidden">ACCESSORIES</p>
              <div className="invisible" />
            </Link>
            <Link
              href="/summary"
              className={`bg-c-active w-[50vw] ${buttonClass}`}
            >
              <div className="invisible" />
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
            } w-screen`}
            onClick={() =>
              model ? router.push("/colors") : setShowPopUp(true)
            }
          >
            <div className="invisible" />
            <p className="">COLORS</p>
            <Image
              src="/arrow-white.png"
              alt="Arrow"
              width="16"
              height="16"
              sizes="100vw"
              className=" "
            />
          </button>
        );
    }
  };

  return (
    <>
      <div className="w-full md:min-h-[120px] sticky bottom-0 md:px-8 flex justify-between shadow-[0px_0px_39px_rgba(0,0,0,0.1)] bg-white">
        <div className="hidden md:flex gap-5">
          <AnimatePresence>
            {imgLink !== "" ? (
              <motion.div
                className="flex items-center"
                key="box"
                initial={{ x: "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-50%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-[160px] h-[80px] relative ">
                  <Image
                    src={imgLink}
                    alt={`Picture of the BMW ${model} model`}
                    fill
                    priority={true}
                    className=""
                  />
                </div>
                <div className="h-[80px] border-[1px] mr-4 ml-6 border-[#ededed]"></div>

                <div className="flex flex-col self-center">
                  <p className="text-t-lightgrey text-[16px] font-lato ">
                    Total
                  </p>
                  <b className="text-t-grey text-[32px] font-lato font-light">
                    ${price}
                  </b>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col self-center">
                  <p className="text-t-lightgrey text-[16px] font-lato ">
                    Total
                  </p>
                  <b className="text-t-grey text-[32px] font-lato font-light">
                    ${price}
                  </b>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {showPopUp ? (
          <motion.div
            className="hidden md:flex self-center bg-t-grey text-white rounded-md ml-[160px] px-4 py-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Please, select a model first!
          </motion.div>
        ) : null}
        <div className="self-center">{renderButton()}</div>
      </div>
      <div className="hidden">cool mobile footer</div>
    </>
  );
};

export default Footer;
