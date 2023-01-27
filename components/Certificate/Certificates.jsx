import React from "react";
import Image from "next/image";
import certificate from "../../public/img/certificate.svg";
import { motion } from "framer-motion";
import { CertificateCard } from "./CertificateCard";

export function Certificates() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="flex items-center justify-center h-screen relative">
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
        Certificados
      </motion.h1>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center items-center gap-10 p-2"
      >
        <div className="flex flex-col justify-center items-start gap-4 md:gap-6">
          <CertificateCard
            name="User Experience"
            place="FIAP"
            path={
              "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/60259/2473c7bca74c6dd7b26a82541a35c7ef/certificado.png"
            }
          />
          <CertificateCard
            name="Leadership Communication"
            place="FIAP"
            path={
              "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/72584/cb1bb97caaa3d64b335a24ffc8afce5a/certificado.png"
            }
          />

          <CertificateCard name="Metodologias Ágeis" place="SOULCODE" />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 md:gap-6">
          <CertificateCard name="DevOps & Agile Culture" place="FIAP" />

          <CertificateCard name="Design Thinking" place="FIAP" />

          <CertificateCard
            name="Gestão de Infraestrutura de TI"
            place="FIAP"
            path={
              "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/72752/212886bfec50b998fb930a224eea4a2b/certificado.png"
            }
          />
        </div>
      </motion.ul>
    </section>
  );
}
