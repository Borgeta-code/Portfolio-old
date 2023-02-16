import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { NavBar } from "./navBar";

export function Presentation() {
  return (
    <section
      id="Start"
      className="flex items-center justify-center h-screen relative"
    >
      <NavBar />

      <div className="flex flex-col justify-center font-bold p-5 sm:p-2 md:p-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            staggerChildren: 0.3,
          }}
        >
          <h3 className="text-roxo text-xl md:text-xl">Olá, meu nome é</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.5,
          }}
        >
          <h1 className="text-gray text-7xl mb-3 mt-3 ">
            Matheus Borges<span className="text-roxo">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.8,
          }}
        >
          <span className="text-roxo text-3xl md:text-4xl gap-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1700)
                  .typeString("< Fullstack Dev />")
                  .start();
              }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
