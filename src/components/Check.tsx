import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  active: Boolean;
};

const Check = (props: Props) => {
  const content = props.active ? (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.5 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className=" bg-c-active h-[30px] w-[30px] self-center"
    >
      <Image
        src="/cd-icon-check.svg"
        alt="Check Button"
        height="30"
        width="30"
      />
    </motion.div>
  ) : (
    <div className="h-[30px] w-[30px] self-center flex align-middle justify-center">
      <div className="border-[#ededed] border-2 h-[26px] w-[26px]" />
    </div>
  );

  return content;
};

export default Check;
