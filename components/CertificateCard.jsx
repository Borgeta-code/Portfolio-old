import React from "react";
import { motion } from "framer-motion";

export function CertificateCard(props) {
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
        <a
          href={props.path}
          download={props.download}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <h3 className="text-gray text-center text-sm md:text-lg font-bold border-b-2 border-b-roxo">
            {props.name}
          </h3>
        </a>
        <span className="text-gray text-xs md:text-base opacity-60 mt-2">
          {props.place}
        </span>
        <span className="text-roxo font-bold text-xs md:text-base mt-1">
          2022
        </span>
      </motion.li>
    </div>
  );
}
