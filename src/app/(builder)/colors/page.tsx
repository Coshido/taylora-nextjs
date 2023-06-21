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

  const data = fetchAll().filter((ele) => ele.model == model);

  const getImage = useCallback(
    (color: string) => {
      const variant = data[0]?.variations.filter((ele) => ele.color == color);
      setImgLink(variant[0].image);
    },
    [data]
  );

  const handleColor = (clickedColor: string) => {
    setColor(clickedColor);
  };

  useEffect(() => {
    getImage(color);
  }, [color, getImage]);

  return (
    <div>
      <Image
        src={imgLink}
        alt={`Picture of the BMW ${model} model`}
        width="0"
        height="0"
        sizes="100vw"
        className="w-auto h-auto"
        priority={true}
      />
      <div></div>
    </div>
  );
};

export default Colors;
