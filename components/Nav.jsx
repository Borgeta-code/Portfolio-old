import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../public/img/github.svg";
import linkedin from "../public/img/linkedin.svg";
import { motion } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";

export function Nav() {
  const [isOpen, setOpen] = useState(false);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const divider = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
    },
  };

  const menu = useRef(null);

  return (
    <div className="w-screen relative flex ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
        }}
        className="absolute right-2 z-30"
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={30}
          color="#8600f0"
          onToggle={(toggled) => {
            if (toggled) {
              menu.current.classList.remove("hidden");
              menu.current.classList.add("active");
            } else {
              menu.current.classList.remove("active");
              menu.current.classList.add("hidden");
            }
          }}
        />
      </motion.div>

      <div ref={menu} className="hidden">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col w-max justify-center items-center"
        >
          <motion.li
            variants={item}
            className="flex flex-col justify-center items-center mt-6 mb-6"
          >
            <Link
              href="/"
              className="no-underline text-gray text-3xl uppercase"
            >
              Home
            </Link>
          </motion.li>

          <motion.div
            variants={divider}
            className=" w-52 border-solid border-b-2 border-b-roxo "
          />

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-center mt-6 mb-6"
          >
            <Link
              href="/"
              className="no-underline text-gray text-3xl opacity-25 uppercase"
            >
              Projects
            </Link>
          </motion.li>

          <motion.div
            variants={divider}
            className=" w-52 border-solid border-b-2 border-b-roxo "
          />

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-center mt-6 mb-6"
          >
            <a
              href="https://www.canva.com/design/DAFR80w_In4/tsvs5SI924m5z3pEbHa1hA/view?utm_content=DAFR80w_In4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              className="no-underline text-gray text-3xl uppercase"
            >
              curriculum
            </a>
          </motion.li>

          <motion.div
            variants={divider}
            className=" w-52 border-solid border-b-2 border-b-roxo "
          />

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-center mt-6 mb-6"
          >
            <a
              href="#contact"
              className="no-underline text-gray text-3xl uppercase"
            >
              Contact
            </a>
          </motion.li>

          <motion.div
            variants={divider}
            className=" w-52 border-solid border-b-2 border-b-roxo"
          />

          <div className="flex justify-center items-center gap-8">
            <motion.li
              variants={item}
              className="flex flex-col justify-center items-center mt-6 mb-6"
            >
              <a
                href={"https://github.com/Borgeta-code"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ opacity: 1, scale: 1.3 }}
                  whileTap={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex justify-center items-center"
                >
                  <Image
                    src={github}
                    id="color"
                    className="w-10"
                    draggable="false"
                    alt="github"
                  />
                </motion.div>
              </a>
            </motion.li>

            <motion.li
              variants={item}
              className="flex flex-col justify-center items-center mt-6 mb-6"
            >
              <a
                href={"https://www.linkedin.com/in/matheus-borges-4a7469239/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ opacity: 1, scale: 1.3 }}
                  whileTap={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex justify-center items-center"
                >
                  <Image
                    src={linkedin}
                    id="color"
                    className="w-10"
                    draggable="false"
                    alt="linkedin"
                  />
                </motion.div>
              </a>
            </motion.li>
          </div>
        </motion.ul>
      </div>
    </div>
  );
}
