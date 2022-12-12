import React from "react";
import Image from "next/image";
import certificate from "../public/certificate.svg";
import { motion } from "framer-motion";

export function Certificates() {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          staggerChildren: 0.3,
          delay: 0.7,
        }}
        className="flex flex-col justify-center items-center font-bold -mt-12 mb-5"
      >
        <motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.3,
            delay: 0.7,
          }}
          className="flex justify-center items-center"
        >
          <Image
            id="skills"
            src={certificate}
            className="w-12 mb-2"
            draggable="false"
          />
        </motion.div>

        <h1 className="flex text-gray text-4xl">CERTIFICATES</h1>
      </motion.div>
    </div>
  );
}
