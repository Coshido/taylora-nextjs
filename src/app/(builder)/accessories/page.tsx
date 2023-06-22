"use client";
import { useProduct } from "@/src/context/ProductContext";
import { fetchAll } from "@/src/lib/fetchAll";
import React, { useCallback, useEffect } from "react";

type Props = {};

const Accessories = (props: Props) => {
  const { model } = useProduct();
  const { accessories, setAccessories } = useProduct();
  const { price, setPrice } = useProduct();
  const { color } = useProduct();

  const data = fetchAll().filter((ele) => ele.model == model);

  const handleClick = (optional: string) => {
    if (accessories.length === 0) {
      setAccessories([...accessories, optional]);
    } else if (accessories.filter((ele) => ele == optional).length > 0) {
      setAccessories((prevState) => {
        return prevState.filter((ele) => ele !== optional);
      });
    } else {
      setAccessories([...accessories, optional]);
    }
  };

  const setAccessoriesPrice = useCallback(() => {
    let total = 0;
    if (accessories.length === 0) {
      total = 0;
    } else {
      accessories.map((optional) => {
        data[0].accessories.map((ele) => {
          if (optional === ele.optional) {
            total += ele.price;
          }
        });
      });
    }
    return total;
  }, [accessories, data]);

  useEffect(() => {
    const accessoriesPrice = setAccessoriesPrice();
    data[0].variations.map((ele) => {
      if (ele.color === color) {
        setPrice(data[0].basePrice + ele.price + accessoriesPrice);
      }
    });
  }, [setAccessoriesPrice, color, data, setPrice]);

  return (
    <div className="flex flex-col gap-5">
      {data[0].accessories.map((ele) => (
        <div
          key={ele.optional}
          className="flex justify-between border-2 border-t-lightgrey p-6"
        >
          <p>{ele.optional}</p>
          <div className="flex gap-2">
            <p>{ele.price}</p>
            <div
              className="border-2 border-t-lightgrey"
              onClick={() => handleClick(ele.optional)}
            >
              check
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accessories;
