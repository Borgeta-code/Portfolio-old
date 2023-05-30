import Head from "next/head";
import useScrollSnap from "react-use-scroll-snap";
import React, { useRef } from "react";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects/Project";
import { Skills } from "../components/Skills/Skills";
import { Education } from "../components/Education";
import { Certificates } from "../components/Certificate/Certificates";
import { Contact } from "../components/Contact/Contact";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });

  const { scrollYProgress } = useScroll();

  return (
    <div>
      <Head>
        <title>Matheus Borges | Fullstack Developer</title>
        <meta name="description" content="Portfólio Matheus Borges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="relative" ref={scrollRef}>
        <Presentation />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
