"use client";
import React from "react";
import { useProduct } from "../context/ProductContext";

type Props = {};

const Footer = (props: Props) => {
  const { model, setModel } = useProduct();

  return <div className="w-full text-lg text-center bg-slate-200">{model}</div>;
};

export default Footer;
