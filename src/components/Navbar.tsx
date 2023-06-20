import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center">
      <Link href="/models">models</Link>
      <Link href="/colors">colors</Link>
      <Link href="/accessories">accessories</Link>
      <Link href="/summary">summary</Link>
    </div>
  );
};

export default Navbar;
