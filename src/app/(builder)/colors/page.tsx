"use client";
import { useProduct } from "@/src/context/ProductContext";
import { fetchAll } from "@/src/lib/fetchAll";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

type Props = {};

const Colors = (props: Props) => {
  const [imgLink, setImgLink] = useState("");
  const { model, setModel } = useProduct();
  const { color, setColor } = useProduct();
  const { price, setPrice } = useProduct();

  const data = fetchAll().filter((ele) => ele.model == model);

  const setBaseColor = useCallback(() => {
    if (color === "") {
      console.log(color);
      setColor(data[0]?.variations[0].color);
    }
  }, [color, data, setColor]);

  useEffect(() => {
    setBaseColor();
  }, [setBaseColor]);

  const getImage = useCallback(
    (color: string) => {
      const variant = data[0]?.variations.filter((ele) => ele.color == color);
      setImgLink(variant[0]?.image);
    },
    [data]
  );

  const handleColor = (clickedColor: string) => {
    setColor(clickedColor);
  };

  useEffect(() => {
    getImage(color);
    data[0].variations.map((ele) => {
      if (ele.color === color) {
        setPrice(data[0].basePrice + ele.price);
      }
    });
  }, [color, getImage, data, setPrice]);

  return (
    <div className="flex flex-col px-60">
      <Image
        src={imgLink}
        alt={`Picture of the BMW ${model} model`}
        width="0"
        height="0"
        sizes="100vw"
        className="w-auto h-auto px-20"
        priority={true}
      />
      <div className="flex justify-center gap-5">
        {data[0]?.variations.map((ele) => (
          <div
            key={ele.color}
            className={`rounded-full w-14 h-14 border-2 p-0.5 ${
              ele.color === color ? "border-c-active" : "border-[#ededed]"
            }`}
          >
            <div
              className={`rounded-full h-full`}
              style={{ backgroundColor: ele.colorHex }}
              onClick={() => handleColor(ele.color)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
