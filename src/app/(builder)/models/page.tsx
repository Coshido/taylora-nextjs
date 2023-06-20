"use client";

import Radio from "@/src/components/Radio";
import { useProduct } from "@/src/context/ProductContext";
import { fetchAll } from "@/src/lib/fetchAll";
import Image from "next/image";
import { useState } from "react";

type Props = {};

const Models = (props: Props) => {
  const { model, setModel } = useProduct();
  const data = fetchAll();

  const onClickHandler = (model: string) => {
    setModel(model);
  };

  const content = data.map((ele) => {
    return (
      <div
        key={ele.id}
        className={`p-11 gap-5 border-2 rounded-sm  flex flex-col hover:cursor-pointer ${
          ele.model === model ? "border-[#ffb500]" : "border-[#ededed]"
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
          sizes="100vw"
          className="w-auto h-auto"
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

  return <div className="flex gap-10 p-10">{content}</div>;
};

export default Models;
