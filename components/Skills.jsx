import React from "react";
import { SkillCard } from "./SkillCard";
import html from "../public/html5.svg";
import css from "../public/css3-alt.svg";
import react from "../public/react.svg";
import git from "../public/github.svg";
import php from "../public/php.svg";
import js from "../public/js.svg";
import laravel from "../public/laravel.svg";
import tailwind from "../public/tailwindcss.svg";
import next from "../public/next-js.svg";
import boot from "../public/bootstrap.svg";
import { motion } from "framer-motion";

export function Skills() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const container2 = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          staggerChildren: 0.3,
        }}
        viewPort={{ once: false, amount: 0.8 }}
        className="font-bold -mt-12 mb-6"
      >
        <h1 className="flex text-roxo text-5xl">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              staggerChildren: 0.3,
            }}
            viewPort={{ once: false, amount: 0.8 }}
            className="text-gray text-5xl"
          >
            #
          </motion.p>
          SKILLS
        </h1>
      </motion.div>

      <div className="flex justify-center items-center">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewPort={{ once: false, amount: 0.2 }}
          className="flex justify-center items-center w-max p-4 gap-10"
        >
          <SkillCard src={html} skill="HTML" w="w-14" />
          <SkillCard src={css} skill="CSS" w="w-14" />
          <SkillCard src={js} skill="JAVASCRIPT" w="w-16" />
          <SkillCard src={php} skill="PHP" w="w-20 mb-2" />
          <SkillCard src={react} skill="REACT" w="w-20" />
        </motion.ul>
      </div>

      <div className="flex justify-center items-center">
        <motion.ul
          variants={container2}
          initial="hidden"
          whileInView="visible"
          viewPort={{ once: false, amount: -1 }}
          className="flex justify-center items-center w-max p-4 gap-8"
        >
          <SkillCard src={next} skill="NEXTJS" w="w-16 mb-3" />
          <SkillCard src={laravel} skill="LARAVEL" w="w-24 mb-2" />
          <SkillCard src={boot} skill="BOOTSTRAP" w="w-24 mb-2" />
          <SkillCard src={tailwind} skill="TAILWINDCSS" w="w-24 mb-2" />
          <SkillCard src={git} skill="GITHUB" w="w-16 mb-3" />
        </motion.ul>
      </div>
    </div>
  );
}
