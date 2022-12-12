import React from "react";
import airplane from "../public/airplane.png";
import Image from "next/image";
import { Form } from "./Form";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <div className="flex flex-col justify-center items-center p-8 ">
      <motion.div
        initial={{ opacity: 0, x: -100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          staggerChildren: 0.5,
          delay: 0.7,
        }}
      >
        <Image src={airplane} className="w-12" draggable="false" alt="avião" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 20,
          delay: 1.3,
        }}
      >
        <h3 className="-mb-1 text-2xl text-white font-bold px-2" id="title">
          Let's talk
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: 1.7,
        }}
        className="flex  justify-center items-center "
      >
        <Form />
      </motion.div>
    </div>
  );
}
