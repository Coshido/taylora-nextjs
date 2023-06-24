"use client";
import { useProduct } from "@/src/context/ProductContext";
import { fetchAll } from "@/src/lib/fetchAll";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Props = {};

const Summary = (props: Props) => {
  const [imgLink, setImgLink] = useState("");
  const [colorHex, setColorHex] = useState("");
  const [colorName, setColorName] = useState("");
  const [colorPrice, setColorPrice] = useState(0);
  const { model, color, accessories, setColor, setShowPopUp } = useProduct();

  const { push } = useRouter();

  useEffect(() => {
    if (model == "") {
      setShowPopUp(true);
      push("/models");
    }
  }, [model, push, setShowPopUp]);

  const data = fetchAll().filter((ele) => ele.model == model);

  const getVariationInfo = useCallback(
    (color: string) => {
      const variant = data[0]?.variations.filter((ele) => ele.color == color);
      if (variant) {
        setColorHex(variant[0]?.colorHex);
        setImgLink(variant[0]?.image);
        setColorName(variant[0]?.colorName);
        setColorPrice(variant[0]?.price);
      }
    },
    [data]
  );

  useEffect(() => {
    if (color == "") {
      setColor(data[0].variations[0].color);
    }
    getVariationInfo(color);
  }, [color, getVariationInfo, data, setColor]);

  console.log(accessories);
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col font-lato mt-10 overflow-y-auto px-4"
        key="color"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-50%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Model */}
        <div className="flex flex-col items-start lg:items-center  gap-5">
          <h3 className="text-[18px] text-t-grey font-bold ">MODEL</h3>
          <Image
            src={imgLink}
            alt={`Picture of the BMW ${model} model`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto max-h-[320px] mx-auto"
            priority={true}
          />
          <h2 className="text-[24px] lg:text-[40px] font-bold">BMW {model}</h2>
          <p className=" lg:max-w-[60%] text-[16px] lg:text-[18px] text-t-lightgrey text-left lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed
            laboriosam ratione nulla atque molestias at explicabo aperiam
            reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam
            magnam inventore nobis, rem adipisci eveniet illum.
          </p>
        </div>
        {/* Color */}
        <div className="border-[1px] border-[#ededed] w-8 lg:self-center mt-6 mb-1" />
        <div className="flex flex-col items-start lg:items-center gap-5">
          <h3 className="text-[18px] text-t-grey font-bold ">COLOR</h3>
          <div className="flex justify-center items-center gap-2">
            <div className="rounded-full w-14 h-14 border-2 p-0.5 border-[#ededed]">
              <div
                className={`rounded-full h-full`}
                style={{ backgroundColor: colorHex }}
              />
            </div>
            <p className="text-[18px] lg:text-[24px] text-t-grey">
              {colorName} - ${colorPrice}
            </p>
          </div>
        </div>
        {/* Accessories */}
        <div className="border-[1px] border-[#ededed] w-8 lg:self-center mt-6 mb-1" />
        <div className="flex flex-col items-start lg:items-center mb-8">
          <h3 className="text-[18px] text-t-grey font-bold mb-6 ">
            ACCESSORIES
          </h3>
          <ul className="list-inside list-disc text-left lg:text-center">
            {accessories.length === 0 ? (
              <li className="text-t-lightgrey">No Accessories Selected</li>
            ) : (
              accessories.map((ele) => (
                <li key={ele} className="text-t-lightgrey">
                  {ele}
                </li>
              ))
            )}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Summary;
