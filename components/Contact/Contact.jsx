import React from "react";
import { motion } from "framer-motion";
import { Form } from "./Form";
import airplane from "../../public/img/airplane.svg";
import Image from "next/image";
import Link from "next/link";
import UpArrow from "../../public/img/upArrow.svg";

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

  const smoothScrollTo = (e) => {
    e.preventDefault();
    const element = document.getElementById("Start");
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="flex flex-col sm:flex-row items-center justify-center h-screen sm:gap-12 relative"
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
            className="hidden flex-col justify-center items-start sendMessage"
          >
            <span className="text-gray text-lg">
              <span className="text-roxo text-2xl font-bold"> | </span>
              Fale comigo
            </span>
            <Link href="/contact">
              <span className="text-roxo text-base mt-1">Enviar mensagem</span>
            </Link>
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <span className="text-gray text-lg">
              <span className="text-roxo text-2xl font-bold"> | </span>
              Email
            </span>
            <span className="text-gray text-base opacity-60 mt-1">
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

            <span className="text-gray text-base opacity-60 mt-1">
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

            <span className="text-gray text-base opacity-60 mt-1">
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

            <span className="text-gray text-base opacity-60 mt-1">
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

      <div className="hidden flex-col justify-center items-center sm:p-3 contactForm">
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
            className="w-14"
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
          className="flex justify-center items-center mt-1"
        >
          <Form />
        </motion.div>
      </div>

      <motion.div
        onClick={smoothScrollTo}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: 1.7,
        }}
        className="cursor-pointer absolute bottom-6 right-5 flex flex-col justify-center items-center "
      >
        <Image
          src={UpArrow}
          alt="Voltar ao começo"
          className="w-12"
          draggable="false"
        />
      </motion.div>
    </section>
  );
}
