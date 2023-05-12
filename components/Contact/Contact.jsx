import React from "react";
import { motion } from "framer-motion";
import { Form } from "./Form";
import toast from "react-hot-toast";
import airplane from "../../public/img/airplane.svg";
import Image from "next/image";
import Link from "next/link";
import UpArrow from "../../public/img/upArrow.svg";
import gmail from "../../public/img/gmail.svg";
import whatsapp from "../../public/img/whats.svg";
import linkedin from "../../public/img/linkedin.svg";
import git from "../../public/img/githubSocial.svg";
import copy from "../../public/img/copy.svg";
import message from "../../public/img/message.svg";
import PageTitle from "../PageTitle";

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

  const copyTo = async () => {
    const email = "matheusborgescode@gmail.com";

    const tempElement = document.createElement("textarea");
    tempElement.value = email;

    tempElement.style.position = "absolute";
    tempElement.style.left = "-9999px";

    document.body.appendChild(tempElement);

    tempElement.select();

    document.execCommand("copy");

    document.body.removeChild(tempElement);

    toast.success("Email copiado!", {
      style: {
        background: "#000012",
        color: "#f7f7f7",
        border: "2px solid #8800f0",
      },
      iconTheme: {
        primary: "#8800f0",
        secondary: "#ffffff",
      },
    });
    return;
  };

  return (
    <section
      id="contact"
      className="flex flex-col sm:flex-row items-center justify-center h-screen sm:gap-12 relative"
    >
      <PageTitle title="Contato" />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-start gap-[30px]">
          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <div className="flex justify-center items-center gap-2">
              <span className="text-roxo text-base font-bold">
                <span className="text-roxo text-xl font-bold"> | </span>
                Gmail
              </span>
              <Image
                src={gmail}
                className="w-5"
                draggable="false"
                alt="email"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="text-gray text-base opacity-80 mt-1">
                Matheusborgescode@
              </span>
              <Image
                src={copy}
                className="w-4 cursor-pointer"
                id="color"
                alt="copiar"
                onClick={copyTo}
              />
            </div>
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <div className="flex justify-center items-center gap-2">
              <span className="text-roxo text-base font-bold">
                <span className="text-roxo text-xl font-bold"> | </span>
                Whatsapp
              </span>
              <Image
                src={whatsapp}
                className="w-5"
                draggable="false"
                alt="whatsapp"
              />
            </div>

            <span className="text-gray text-base opacity-80 mt-1">
              <a
                href="https://wa.me/5511957943978?text=Ol%C3%A1%20Matheus%20Borges!"
                target="_blank"
                rel="noopener noreferrer"
              >
                (11) 95794-3978
              </a>
            </span>
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <div className="flex justify-center items-center gap-2 ">
              <span className="text-roxo text-base font-bold">
                <span className="text-roxo text-xl font-bold"> | </span>
                Linkedin
              </span>
              <Image
                src={linkedin}
                className="w-5"
                draggable="false"
                alt="linkedin"
              />
            </div>

            <span className="text-gray text-base opacity-80 mt-1">
              <a
                href="https://linkedin.com/in/matheus-borges-coder"
                target="_blank"
                rel="noopener noreferrer"
              >
                @borges-coder
              </a>
            </span>
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-start"
          >
            <div className="flex justify-center items-center gap-2">
              <span className="text-roxo text-base font-bold">
                <span className="text-roxo text-xl font-bold"> | </span>
                Github
              </span>
              <Image src={git} className="w-6" draggable="false" alt="github" />
            </div>
            <span className="text-gray text-base opacity-80 mt-1">
              <a
                href="https://github.com/Borgeta-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                @borges-coder
              </a>
            </span>
          </motion.li>
        </div>
      </motion.ul>



      <div className="hidden flex-col justify-center items-center sm:p-3 contactForm">
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
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
          className="w-10"
          draggable="false"
        />
      </motion.div>
    </section>
  );
}


