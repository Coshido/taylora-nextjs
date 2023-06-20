"use client";

import { useProduct } from "@/src/context/ProductContext";
import { fetchAll } from "@/src/lib/fetchAll";
import Image from "next/image";

type Props = {};

const Models = (props: Props) => {
  const { model, setModel } = useProduct();

  const data = fetchAll();

  const content = data.map((ele) => {
    return (
      <div
        key={ele.id}
        className="p-11 gap-5 border-2 rounded-sm border-[#ededed] flex flex-col hover:cursor-pointer active:border-[#ffb500]"
        onClick={() => setModel(ele.model)}
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
        <p className="font-lato text-t-lightgrey ">
          from {Intl.NumberFormat("en-US").format(ele.basePrice)}$
        </p>
      </div>
    );
  });

  return <div className="flex gap-10 p-10">{content}</div>;
};

export default Models;
