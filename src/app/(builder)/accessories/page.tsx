"use client";
import Check from "@/src/components/Check";
import { useProduct } from "@/src/context/ProductContext";
import { fetchAll } from "@/src/lib/fetchAll";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

type Props = {};

const Accessories = (props: Props) => {
  const { model, color, accessories, setAccessories, setPrice, setShowPopUp } =
    useProduct();

  const { push } = useRouter();

  if (model == "") {
    setShowPopUp(true);
    push("/models");
  }

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
    if (data.length !== 0) {
      data[0].variations.map((ele) => {
        if (ele.color === color) {
          setPrice(data[0].basePrice + ele.price + accessoriesPrice);
        }
      });
    }
  }, [setAccessoriesPrice, color, data, setPrice]);

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col gap-5 px-6 lg:px-16 2xl:px-40 mb-8"
        key="color"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-50%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {data.length !== 0
          ? data[0].accessories.map((ele) => (
              <div
                key={ele.optional}
                className={`flex flex-col items-center lg:flex-row lg:justify-between gap-4 border-2 p-6 text-[18px] lg:text-[26px] font-bold ${
                  accessories.includes(ele.optional)
                    ? `border-c-active`
                    : `border-[#EDEDED]`
                }  `}
                onClick={() => handleClick(ele.optional)}
              >
                <p>{ele.optional}</p>
                <div className="flex flex-col lg:flex-row gap-4">
                  <p className=" text-t-lightgrey lg:text-black text-[16px] lg:text-[26px]">
                    ${Intl.NumberFormat("en-US").format(ele.price)}
                  </p>
                  {accessories.includes(ele.optional) ? (
                    <Check active={true} />
                  ) : (
                    <Check active={false} />
                  )}
                </div>
              </div>
            ))
          : ""}
      </motion.div>
    </AnimatePresence>
  );
};

export default Accessories;
