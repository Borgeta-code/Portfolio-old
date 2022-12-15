import React from "react";
import Image from "next/image";
import github from "../public/img/github.svg";
import linkedin from "../public/img/linkedin.svg";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className="flex items-center justify-center h-36 bg-home">
      <div className="flex justify-between items-center w-max gap-5 md:gap-12">
        <motion.div
          initial={{ scale: 0, x: -50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.5,
          }}
          className="w-20 md:w-52 border-solid border-b-2 border-b-roxo"
        />

        <a
          href={"https://github.com/Borgeta-code"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.4 }}
            whileTap={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex justify-center items-center"
          >
            <Image
              src={github}
              id="color"
              className="w-8"
              draggable="false"
              alt="github"
            />
          </motion.div>
        </a>

        <a
          href={"https://www.linkedin.com/in/matheus-borges-4a7469239/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.4 }}
            whileTap={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex justify-center items-center"
          >
            <Image
              src={linkedin}
              id="color"
              className="w-8"
              draggable="false"
              alt="linkedin"
            />
          </motion.div>
        </a>

        <motion.div
          initial={{ scale: 0, x: 50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.5,
          }}
          className=" w-20 md:w-52 border-solid border-b-2 border-b-roxo"
        />
      </div>
    </div>
  );
}
