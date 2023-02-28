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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen relative">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          staggerChildren: 0.3,
        }}
        className="text-gray text-2xl font-medium uppercase absolute top-5 left-4"
      >
        <span className="text-roxo text-2xl font-bold"> | </span>
        Formação acadêmica
      </motion.h1>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col justify-center items-start p-2 max-[320px]:p-1 "
      >
        <motion.li
          variants={item}
          className="flex flex-col justify-center items-start mb-12"
        >
          <span className="text-gray text-lg">
            <span className="text-roxo text-2xl font-bold"> | </span>
            Análise e Desenvolvimento de Sistemas
          </span>

          <span className="text-gray text-base opacity-60 mt-2">
            Universidade Cruzeiro do Sul
          </span>
          <span className="text-roxo font-bold text-sm md:text-base mt-2">
            2023 - 2024 <span className="opacity-70">• Em andamento</span>
          </span>
        </motion.li>

        <motion.li
          variants={item}
          className="flex flex-col justify-center items-start"
        >
          <span className="text-gray text-lg">
            <span className="text-roxo text-2xl font-bold"> | </span>
            Desenvolvimento de Sistemas
          </span>

          <span className="text-gray text-base opacity-60 mt-2">
            Etec Doutor Celso Giglio
          </span>
          <span className="text-roxo font-bold text-sm md:text-base mt-2">
            2020 - 2022
          </span>
        </motion.li>
      </motion.ul>
    </section>
  );
}
