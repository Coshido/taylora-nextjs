import Image from "next/image";
import React from "react";

type Props = {
  active: Boolean;
};

const Radio = (props: Props) => {
  const content = props.active ? (
    <div className=" bg-c-active h-[30px] w-[30px] self-center rounded-full">
      <Image
        src="/cd-icon-check.svg"
        alt="Radio Button"
        height="30"
        width="30"
      />
    </div>
  ) : (
    <div className="h-[30px] w-[30px] self-center flex align-middle justify-center">
      <div className="border-[#ededed] border-2 rounded-full h-[26px] w-[26px]" />
    </div>
  );

  return content;
};

export default Radio;
