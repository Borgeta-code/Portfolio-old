import React from "react";
import Typewriter from "typewriter-effect";
import { Nav } from "./Nav";
import { motion } from "framer-motion";

export function Presentation() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-max absolute top-0 border-b border-b-gray border-opacity-10">
        <Nav />
      </div>

      <div className="flex flex-col justify-center font-bold">
        <h3 className="text-roxo text-xl">Hi, my name is</h3>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.3,
          }}
        >
          <h1 className="text-gray text-7xl mb-3 mt-3">Matheus Borges.</h1>
        </motion.div>

        <span className="text-roxo text-5xl gap-2">
          <Typewriter
            options={{
              strings: ["Front-end.", "Back-end.", "Full-Stack junior."],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
}
