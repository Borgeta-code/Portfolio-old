import React from "react";
import airplane from "../public/airplane.png";
import Image from "next/image";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <div className="flex flex-col justify-center items-center p-8 ">
      <motion.div
        initial={{ opacity: 0.2, x: -100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          staggerChildren: 0.5,
        }}
        viewPort={{ once: false, amount: 1 }}
      >
        <Image src={airplane} className="w-12" draggable="false" alt="avião" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.6,
        }}
        viewPort={{ once: false, amount: 1 }}
      >
        <h3 className="-mb-3 text-2xl text-white font-bold px-2" id="title">
          Let's talk
        </h3>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 100,
          //   damping: 20,
          delay: 1.2,
        }}
        viewPort={{ once: false, amount: 1 }}
        className="flex w-auto h-min flex-col justify-center items-center p-4"
      >
        <Input name="Name" type="text" />
        <Input name="E-mail" type="email" />
        <Textarea name="Subject" />

        <div id="button-container">
          <div id="allsides-2">
            <button id="button">Enviar</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
