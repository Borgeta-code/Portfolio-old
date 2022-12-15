import React from "react";
import Image from "next/image";
import education from "../public/img/education.svg";
import { motion } from "framer-motion";

export function Education() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col justify-center items-center -mt-6">
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
        className="flex flex-col justify-center items-center font-bold mb-3"
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
            id="color"
            src={education}
            className="w-16 -mb-1"
            draggable="false"
            alt="education"
          />
        </motion.div>

        <h1 className="flex text-gray text-4xl">EDUCATION</h1>
      </motion.div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col justify-center items-center p-2 max-[320px]:p-1 "
      >
        <motion.li
          variants={item}
          className="flex flex-col justify-center items-center mt-5 mb-5"
        >
          <h3 className="text-gray text-base md:text-lg font-bold border-b-2 border-b-roxo">
            Análise e Desenvolvimento de Sistemas
          </h3>
          <span className="text-gray text-base opacity-60 mt-2">
            Universidade Cruzeiro do Sul
          </span>
          <span className="text-roxo font-bold text-sm md:text-base mt-2">
            2023 - 2024
          </span>
        </motion.li>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.3,
            delay: 1.3,
          }}
          className="h-12 w-0.5 bg-roxo"
        />

        <motion.li
          variants={item}
          className="flex flex-col justify-center items-center mt-5 mb-5"
        >
          <h3 className="text-gray text-base md:text-lg font-bold border-b-2 border-b-roxo">
            Desenvolvimento de Sistemas
          </h3>
          <span className="text-gray text-base opacity-60 mt-2">
            ETEC Doutor Celso Giglio
          </span>
          <span className="text-roxo font-bold text-sm md:text-base mt-2">
            2020 - 2022
          </span>
        </motion.li>
      </motion.ul>
    </div>
  );
}
