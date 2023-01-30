import React, { useCallback, useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { DotButton } from "./dot";
import toast, { Toaster } from "react-hot-toast";
import useEmblaCarousel from "embla-carousel-react";
import Transimple from "../../public/img/Transimple.svg";
import Qrmaker from "../../public/img/QrMaker.svg";
import asr from "../../public/img/asr.svg";

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

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

        {/* mobile menu */}

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            staggerChildren: 0.3,
          }}
          className="hidden justify-between w-[95vw] items-center btnEmblaMobile"
        >
          <button
            className={
              prevBtnEnabled
                ? "text-roxo text-3xl"
                : "text-roxo text-3xl opacity-20"
            }
            onClick={scrollPrev}
            enabled={prevBtnEnabled}
          >
            ❮
          </button>

          <div className="flex justify-center items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>

          <button
            className={
              nextBtnEnabled
                ? "text-roxo text-3xl"
                : "text-roxo text-3xl opacity-20 "
            }
            onClick={scrollNext}
            enabled={nextBtnEnabled}
          >
            ❯
          </button>
        </motion.div>

        {/* desktop menu */}
        <button
          className={
            prevBtnEnabled
              ? "text-roxo text-5xl z-50 absolute left-3 hidden btnEmblaDesktop"
              : "text-roxo text-5xl opacity-20 z-50 absolute left-3 hidden btnEmblaDesktop"
          }
          onClick={scrollPrev}
          enabled={nextBtnEnabled}
        >
          ❮
        </button>
        <button
          className={
            nextBtnEnabled
              ? "text-roxo text-5xl absolute right-3 z-50 hidden btnEmblaDesktop"
              : "text-roxo text-5xl opacity-20 absolute right-3 z-50 hidden btnEmblaDesktop"
          }
          onClick={scrollNext}
          enabled={prevBtnEnabled}
        >
          ❯
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            staggerChildren: 0.3,
          }}
          className="embla"
        >
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <ProjectCard
                  name="A.S.R"
                  description="Aplicação Web completa desenvolvida para Trabalho de Conclusão de Curso, nela é possivel fazer Agendamentos de Salas e Recursos na instituição"
                  techs="Laravel, Javascript, FullCalendar, Bootstrap e MySQL"
                  src={asr}
                  git="https://github.com/Borgeta-code/Transimple"
                />
              </div>
              <div className="embla__slide">
                <ProjectCard
                  name="Transimple"
                  description="Aplicação Web simples, nela é possivel traduzir de qualquer língua a uma lingua desejada"
                  techs="Nextjs, TailwindCSS, FramerMotion e RapidAPI"
                  src={Transimple}
                  demo="https://transimple.vercel.app/"
                  git="https://github.com/Borgeta-code/Transimple"
                />
              </div>
              <div className="embla__slide">
                <ProjectCard
                  name="QrMaker"
                  description="Aplicação Web simples, nela você pode gerar um Qrcode funcional e baixá lo"
                  techs="Nextjs, TailwindCSS e QrCode API"
                  src={Qrmaker}
                  demo="https://qrmaker.vercel.app/"
                  git="https://github.com/Borgeta-code/QrMaker"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* dots desktop */}

        <div className="hidden justify-center items-center gap-2 absolute bottom-10 btnEmblaDesktop">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
