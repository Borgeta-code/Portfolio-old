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
        className="flex flex-col justify-center items-start mt-2 mb-2"
      >
        <a
          href={props.path}
          download={props.download}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <h3 className="text-gray text-lg">
            <span className="text-roxo text-lg font-bold"> | </span>
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
