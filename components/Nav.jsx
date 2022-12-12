import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
        }}
        className="flex justify-center items-center p-4 gap-6 bg-home"
      >
        <motion.div
          whileHover={{
            opacity: 1,
            borderBottom: "1px solid #8600f0",
            scale: 1.2,
          }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
          className="flex justify-center items-center"
        >
          <Link
            href="/"
            className="no-underline text-gray border-b border-b-roxo text-sm uppercase"
          >
            Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.2 }}
          // whileHover={{
          //   opacity: 1,
          //   borderBottom: "1px solid #8600f0",
          //   scale: 1.2,
          // }}
          // whileTap={{ scale: 0.8 }}
          // transition={{ type: "spring", stiffness: 600, damping: 20 }}
          className="flex justify-center items-center"
        >
          <Link
            href="/Projects"
            className="no-underline text-gray text-sm uppercase"
          >
            Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.2 }}
          // whileHover={{
          //   opacity: 1,
          //   borderBottom: "1px solid #8600f0",
          //   scale: 1.2,
          // }}
          // whileTap={{ scale: 0.8 }}
          // transition={{ type: "spring", stiffness: 600, damping: 20 }}
          className="flex justify-center items-center"
        >
          <a
            href="../public/Resúmé - Matheus Borges.pdf"
            download="Resúmé - Matheus Borges.pdf"
            className="no-underline text-gray text-sm uppercase"
          >
            Resúmé
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
