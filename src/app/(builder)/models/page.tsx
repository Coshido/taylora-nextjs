"use client";

import { useProduct } from "@/src/context/ProductContext";

type Props = {};

const Models = (props: Props) => {
  const { model, setModel } = useProduct();

  return (
    <div className="flex flex-col">
      <p>Models: {model}</p>
      <button onClick={() => setModel("quello bello")}> click </button>
    </div>
  );
};

export default Models;
