import React from "react";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
import html from "../../public/img/html5.svg";
import css from "../../public/img/css3-alt.svg";
import react from "../../public/img/react.svg";
import git from "../../public/img/github.svg";
import php from "../../public/img/php.svg";
import js from "../../public/img/js.svg";
import laravel from "../../public/img/laravel.svg";
import tailwind from "../../public/img/tailwindcss.svg";
import next from "../../public/img/next-js.svg";
import boot from "../../public/img/bootstrap.svg";

export function Skills() {
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

  return (
    <section className="flex items-center justify-center h-screen relative">
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
        Habilidades
      </motion.h1>

      <div className="flex justify-center items-center">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col w-max justify-center items-center"
        >
          <div className="flex justify-center items-center w-max p-4 gap-6 md:gap-10">
            <SkillCard src={html} skill="HTML" w="w-8  md:w-14" />
            <SkillCard src={css} skill="CSS" w="w-8 mb-1 md:w-14" />
            <SkillCard src={js} skill="JAVASCRIPT" w="w-10  md:w-16" />
            <SkillCard src={php} skill="PHP" w="w-12 mb-1 md:w-20 md:mb-2" />
            <SkillCard src={react} skill="REACT" w="w-12  md:w-20" />
          </div>

          <div className="flex justify-center items-center w-max p-4 gap-4 md:gap-6">
            <SkillCard src={next} skill="NEXT" w="w-8 mb-1 md:w-16 md:mb-3" />
            <SkillCard
              src={laravel}
              skill="LARAVEL"
              w="w-12  md:w-24 md:mb-2"
            />
            <SkillCard src={boot} skill="BOOTSTRAP" w="w-12  md:w-24 md:mb-2" />
            <SkillCard
              src={tailwind}
              skill="TAILWIND"
              w="w-12  md:w-24 md:mb-2"
            />
            <SkillCard
              src={git}
              skill="GITHUB"
              w="w-8 mb-0.5 md:w-16 md:mb-3"
            />
          </div>
        </motion.ul>
      </div>
    </section>
  );
}
