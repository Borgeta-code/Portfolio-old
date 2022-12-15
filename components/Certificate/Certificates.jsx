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
    <div className="flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          staggerChildren: 0.3,
          delay: 0.7,
        }}
        className="flex flex-col justify-center items-center font-bold mb-5"
      >
        <motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.3,
            delay: 0.7,
          }}
          className="flex justify-center items-center"
        >
          <Image
            id="color"
            src={certificate}
            className="w-14 md:16 mb-2"
            draggable="false"
            alt="certificate"
          />
        </motion.div>

        <h1 className="flex text-gray text-4xl">CERTIFICATES</h1>
      </motion.div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col justify-center items-center p-3"
      >
        <div className="flex justify-center items-center gap-4 md:gap-10">
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
        <div className="flex justify-center items-center gap-4 md:gap-10">
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
    </div>
  );
}
