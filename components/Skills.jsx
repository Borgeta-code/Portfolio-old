import React from "react";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
import Image from "next/image";
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
import star from "../public/star.svg";

export function Skills() {
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
            src={star}
            className="w-10 mb-2"
            draggable="false"
          />
        </motion.div>

        <h1 className="flex text-gray text-4xl">SKILLS</h1>
      </motion.div>

      <div className="flex justify-center items-center">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col justify-center items-center "
        >
          <div className="flex justify-center items-center w-max p-4 gap-10">
            <SkillCard src={html} skill="HTML" w="w-14" />
            <SkillCard src={css} skill="CSS" w="w-14" />
            <SkillCard src={js} skill="JAVASCRIPT" w="w-16" />
            <SkillCard src={php} skill="PHP" w="w-20 mb-2" />
            <SkillCard src={react} skill="REACT" w="w-20" />
          </div>

          <div className="flex justify-center items-center w-max p-4 gap-8">
            <SkillCard src={next} skill="NEXTJS" w="w-16 mb-3" />
            <SkillCard src={laravel} skill="LARAVEL" w="w-24 mb-2" />
            <SkillCard src={boot} skill="BOOTSTRAP" w="w-24 mb-2" />
            <SkillCard src={tailwind} skill="TAILWINDCSS" w="w-24 mb-2" />
            <SkillCard src={git} skill="GITHUB" w="w-16 mb-3" />
          </div>
        </motion.ul>
      </div>
    </div>
  );
}
