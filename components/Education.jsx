import React from "react";
import Image from "next/image";
import education from "../public/img/education.svg";
import time from "../public/img/Time.svg";
import PageTitle from "./PageTitle";
import { motion } from "framer-motion";

export function Education() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
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
      <PageTitle title="Formação Acadêmica" />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
          <span className="text-roxo font-bold text-sm md:text-base mt-2 flex gap-1">
            2023 - 2024{" "}
            <span className="opacity-60 flex gap-1">
              • Em andamento{" "}
              <Image src={time} alt="Pequeno relógio" className="w-[18px]" />
            </span>
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
