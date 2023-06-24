"use client";

import Radio from "@/src/components/Radio";
import { useProduct } from "@/src/context/ProductContext";
import { fetchAll } from "@/src/lib/fetchAll";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";

type Props = {};

const Models = (props: Props) => {
  const { model, setModel, setColor, setPrice } = useProduct();

  const data = fetchAll();

  const onClickHandler = (clickedModel: string) => {
    clickedModel === model ? setModel("") : setModel(clickedModel);
  };

  const setBasePrice = useCallback(() => {
    if (model) {
      data.map((ele) => {
        if (ele.model === model) {
          setPrice(ele.basePrice);
        }
      });
    } else {
      setPrice(0);
    }
  }, [data, model, setPrice]);

  useEffect(() => {
    setColor("");
    setBasePrice();
  }, [setColor, setBasePrice]);

  const content = data.map((ele) => {
    return (
      <div
        key={ele.id}
        className={`p-11 gap-5 border-2 rounded-sm flex flex-col hover:cursor-pointer ${
          ele.model === model ? "border-c-active" : "border-[#ededed]"
        }`}
        onClick={() => onClickHandler(ele.model)}
      >
        <h2 className="text-[2rem] font-bold font-lato text-text-grey">
          BMW {ele.model}
        </h2>
        <Image
          src={ele.variations[0].image}
          alt={`Picture of the BMW ${ele.model} model`}
          width="0"
          height="0"
          sizes="100%"
          className="max-h-[218px] w-auto mx-auto"
          priority={true}
        />
        <p className="font-lato text-t-lightgrey focus:bg-inherit">
          from ${Intl.NumberFormat("en-US").format(ele.basePrice)}
        </p>
        {ele.model === model ? (
          <Radio active={true} />
        ) : (
          <Radio active={false} />
        )}
      </div>
    );
  });

  return (
    <AnimatePresence>
      <motion.div
        className="flex gap-14 px-16 justify-center flex-col lg:flex-row mb-8"
        key="color"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-50%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
};

export default Models;
