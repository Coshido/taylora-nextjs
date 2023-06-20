"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IProductContext extends Product {
  setModel: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  setAccessories: Dispatch<SetStateAction<string[]>>;
  setPrice: Dispatch<SetStateAction<number>>;
}

export const ProductContext = createContext<IProductContext>({
  model: "",
  color: "",
  accessories: [""],
  price: 0,
  setModel: () => {},
  setColor: () => {},
  setAccessories: () => {},
  setPrice: () => {},
});

type Props = {
  children?: ReactNode;
};

export const ProductContextProvider = ({ children }: Props) => {
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [accessories, setAccessories] = useState([""]);
  const [price, setPrice] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        model,
        color,
        accessories,
        price,
        setModel,
        setColor,
        setAccessories,
        setPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
