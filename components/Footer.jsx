import React from "react";
import Image from "next/image";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className="flex items-center justify-center h-36 bg-home">
      <div className="flex justify-between items-center w-max gap-12">
        <motion.div
          initial={{ scale: 0, x: -50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.5,
          }}
          viewPort={{ once: false, amount: 1 }}
          className="w-52 border-solid border-b-2 border-b-roxo"
        />

        <a href={"https://github.com/Borgeta-code"}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              staggerChildren: 0.5,
            }}
            className="flex justify-center items-center w-10 h-10 border-solid border-2 border-roxo rounded-lg"
          >
            <Image
              src={github}
              className="w-6"
              draggable="false"
              alt="github"
            />
          </motion.div>
        </a>

        <a href={"https://www.linkedin.com/in/matheus-borges-4a7469239/"}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              staggerChildren: 0.5,
            }}
            className="flex justify-center items-center w-10 h-10 border-solid border-2 border-roxo rounded-lg"
          >
            <Image
              src={linkedin}
              className="w-4"
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
          viewPort={{ once: false, amount: 1 }}
          className="w-52 border-solid border-b-2 border-b-roxo"
        />
      </div>
    </div>
  );
}
