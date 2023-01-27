import React from "react";
import airplane from "../../public/img/airplane.svg";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./Form";
import { motion } from "framer-motion";

export function Contact() {
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
    <section
      id="contact"
      className="flex flex-col sm:flex-row items-center justify-center h-screen gap-14 relative"
    >
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
        Contato
      </motion.h1>

      <motion.ul variants={container} initial="hidden" whileInView="visible">
        <div className="flex flex-col justify-center items-start gap-5">
          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <span className="text-gray text-lg">
              <span className="text-roxo text-2xl font-bold"> | </span>
              Email
            </span>
            <span className="text-gray text-base opacity-60 mt-2">
              matheusborgescode@gmail.com
            </span>
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <span className="text-gray text-lg">
              <span className="text-roxo text-2xl font-bold"> | </span>
              Telefone
            </span>

            <span className="text-gray text-base opacity-60 mt-2">
              (11) 957943978
            </span>
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <span className="text-gray text-lg">
              <span className="text-roxo text-2xl font-bold"> | </span>
              Linkedin
            </span>

            <span className="text-gray text-base opacity-60 mt-2">
              <a
                href="https://linkedin.com/in/matheus-borges-coder"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver perfil
              </a>
            </span>
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <span className="text-gray text-lg">
              <span className="text-roxo text-2xl font-bold"> | </span>
              Github
            </span>

            <span className="text-gray text-base opacity-60 mt-2">
              <a
                href="https://github.com/Borgeta-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver perfil
              </a>
            </span>
          </motion.li>
        </div>
      </motion.ul>

      <Link
        href="/contact"
        className="hidden justify-center items-center p-2 border-2 border-roxo rounded-lg contactbtn"
      >
        Fale comigo
      </Link>

      <div className="flex flex-col justify-center items-center p-3 contactForm">
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.5,
            delay: 0.5,
          }}
        >
          <Image
            src={airplane}
            id="color"
            className="w-12 md:w-14"
            draggable="false"
            alt="airplane"
          />
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
          className="flex justify-center items-center mt-2"
        >
          <Form />
        </motion.div>
      </div>
    </section>
  );
}
