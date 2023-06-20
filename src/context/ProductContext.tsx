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
}

export const ProductContext = createContext<IProductContext>({
  model: "",
  color: "",
  accessories: [],
  price: 0,
  setModel: () => {},
});

type Props = {
  children?: ReactNode;
};

export const ProductContextProvider = ({ children }: Props) => {
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [accessories, setAccessories] = useState([]);
  const [price, setPrice] = useState(0);

  return (
    <ProductContext.Provider
      value={{ model, color, accessories, price, setModel }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
