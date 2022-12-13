import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Nav } from "./Nav";

export function Presentation() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center absolute top-0 ">
        <Nav />
      </div>

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
          <h3 className="text-roxo text-xl md:text-xl">Hi, my name is</h3>
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
          <h1 className="text-gray text-7xl mb-3 mt-3 ">Matheus Borges.</h1>
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
                  .typeString("< Front-end Dev />")
                  .start();
              }}
            />
          </span>
        </motion.div>
      </div>
    </div>
  );
}
