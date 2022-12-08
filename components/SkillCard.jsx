import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function SkillCard(props) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <motion.li
        variants={item}
        className="flex flex-col justify-center items-center mt-5 mb-5"
      >
        <Image
          id="skills"
          src={props.src}
          className={props.w}
          draggable="false"
        />
        <h3 className="text-gray opacity-75 text-sm font-bold mt-1">
          {props.skill}
        </h3>
      </motion.li>
    </div>
  );
}
