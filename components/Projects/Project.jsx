import React, { useCallback, useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { DotButton } from "./dot";
import useEmblaCarousel from "embla-carousel-react";
import Transimple from "../../public/img/Transimple.svg";
import Qrmaker from "../../public/img/QrMaker.svg";
import asr from "../../public/img/asr.svg";
import weather from "../../public/img/Weathermate.svg";
import Image from "next/image";
import right from "../../public/img/rigthArrow.svg";
import left from "../../public/img/leftArrow.svg";
import Slide from "../../public/img/Slide.svg";

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

      {/* mobile dots */}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          staggerChildren: 0.3,
        }}
        className="hidden justify-center mb-3 items-center btnEmblaMobile"
      >
        <div className="flex justify-center items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </motion.div>

      {/* desktop menu */}
      <button
        className={
          prevBtnEnabled
            ? "absolute left-3 z-50 hidden btnEmblaDesktop"
            : "opacity-20 absolute left-3 z-50 hidden btnEmblaDesktop"
        }
        onClick={scrollPrev}
        enabled={nextBtnEnabled}
      >
        <Image src={left} alt="Esquerda" className="w-14" draggable="false" />
      </button>
      <button
        className={
          nextBtnEnabled
            ? "absolute right-3 z-50 hidden btnEmblaDesktop"
            : "opacity-20 absolute right-3 z-50 hidden btnEmblaDesktop"
        }
        onClick={scrollNext}
        enabled={prevBtnEnabled}
      >
        <Image src={right} alt="Direita" className="w-14" draggable="false" />
      </button>

      <div className="hidden justify-center items-center gap-2 absolute bottom-10 btnEmblaDesktop">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

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
            <div className="embla__slide ">
              <ProjectCard
                name="A.S.R"
                description="Aplicação web desenvolvida para TCC que permite aos professores agendar recursos e horários nas salas da instituição"
                techs="Laravel, Javascript, FullCalendar, Bootstrap e MySQL"
                src={asr}
                git="https://github.com/Borgeta-code/Agendamento-de-Salas-e-Recursos---ASR"
              />
            </div>
            <div className="embla__slide ">
              <ProjectCard
                name="WeatherMate"
                description="Aplicação web que permite aos usuários escolher uma cidade e exibe informações sobre o clima"
                techs="Nextjs, TailwindCSS e Open Weather API"
                src={weather}
                demo="https://weathermateapp.vercel.app/"
                git="https://github.com/Borgeta-code/WeatherMate"
              />
            </div>
            <div className="embla__slide">
              <ProjectCard
                name="QrMaker"
                description="Aplicação web onde é possível gerar um QRCode funcional e baixá-lo"
                techs="Nextjs, TailwindCSS e QrCode API"
                src={Qrmaker}
                demo="https://qrmaker.vercel.app/"
                git="https://github.com/Borgeta-code/QrMaker"
              />
            </div>
            <div className="embla__slide">
              <ProjectCard
                name="Transimple"
                description="Aplicação web onde é possível fazer traduções para alguns idiomas com rapidez e eficiência"
                techs="Nextjs, TailwindCSS, FramerMotion e RapidAPI"
                src={Transimple}
                demo="https://transimple.vercel.app/"
                git="https://github.com/Borgeta-code/Transimple"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
}
