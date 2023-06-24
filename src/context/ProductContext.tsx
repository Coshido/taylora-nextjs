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
  showPopUp: boolean;
  setShowPopUp: Dispatch<SetStateAction<boolean>>;
}

export const ProductContext = createContext<IProductContext>({
  model: "",
  color: "",
  accessories: [] as string[],
  price: 0,
  showPopUp: false,
  setModel: () => {},
  setColor: () => {},
  setAccessories: () => {},
  setPrice: () => {},
  setShowPopUp: () => {},
});

type Props = {
  children?: ReactNode;
};

export const ProductContextProvider = ({ children }: Props) => {
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [accessories, setAccessories] = useState<string[]>([]);
  const [price, setPrice] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        model,
        color,
        accessories,
        price,

        showPopUp,
        setModel,
        setColor,
        setAccessories,
        setPrice,

        setShowPopUp,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
