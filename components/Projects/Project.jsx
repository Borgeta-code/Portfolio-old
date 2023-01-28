import React from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Transimple from "../../public/img/Transimple.svg";
import Qrmaker from "../../public/img/QrMaker.svg";

export function Projects() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen relative">
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
          projetos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            staggerChildren: 0.3,
          }}
          ref={emblaRef}
          className="embla p-2"
        >
          <div className="embla__container">
            <div className="embla__slide">
              <ProjectCard
                name="Transimple"
                description="Nextjs, Tailwind, FramerMotion e RapidAPI"
                src={Transimple}
                demo="https://transimple.vercel.app/"
                git="https://github.com/Borgeta-code/Transimple"
              />
            </div>
            <div className="embla__slide">
              <ProjectCard
                name="QrMaker"
                description="Nextjs, Tailwind e QrCode"
                src={Qrmaker}
                demo="https://qrmaker.vercel.app/"
                git="https://github.com/Borgeta-code/QrMaker"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
