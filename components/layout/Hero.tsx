"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importação do componente oficial

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-off-white)]
                 pt-32 md:pt-20"
    >
      {/* Decorativos suaves */}
      <div className="hidden md:block absolute top-20 -left-24 w-96 h-96 bg-[var(--color-gold)]/6 blur-[72px] rounded-full pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 -right-24 w-96 h-96 bg-[var(--color-deep-blue)]/6 blur-[72px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center md:text-left flex flex-col justify-center"
        >
          <span
            className="block font-medium tracking-[0.2em] uppercase text-[10px] mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            Psicologia Clínica & Neuropsicologia
          </span>

          <h1
            className="text-5xl md:text-6xl font-light leading-[1.05] mb-6"
            style={{ color: "var(--color-deep-blue)", fontFamily: "serif" }}
          >
            Um espaço para <br />
            <span className="italic text-[var(--color-gold)] font-normal">
              florescer
            </span>
            <br />
            sua melhor versão.
          </h1>

          <p className="text-lg text-[var(--color-deep-blue)]/80 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            Acolhimento especializado para ajudar você a navegar por suas
            emoções e construir uma vida mais equilibrada e significativa.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://wa.me/558898022119"
              target="_blank"
              rel="noreferrer"
              aria-label="Agendar consulta via WhatsApp"
              className="px-8 py-4 rounded-full text-sm font-medium tracking-wide shadow-xl"
              style={{
                backgroundColor: "var(--color-deep-blue)",
                color: "var(--color-off-white)",
              }}
            >
              Agendar Consulta
            </a>

            <a
              href="#about"
              aria-label="Conhecer mais sobre a Dra. Maiara"
              className="px-8 py-4 rounded-full text-sm font-medium tracking-wide border"
              style={{
                borderColor: "rgba(10,10,11,0.06)",
                color: "var(--color-deep-blue)",
              }}
            >
              Conhecer mais
            </a>
          </div>
        </motion.div>

        {/* Arte da foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:justify-end"
        >
          <div
            className="relative z-10
                       w-[260px] h-[350px]
                       sm:w-[320px] sm:h-[450px]
                       md:w-[420px] md:h-[580px]
                       rounded-[180px_180px_24px_24px] overflow-hidden"
            style={{
              boxShadow: "0 20px 40px rgba(10,10,11,0.12)",
              border: "1px solid rgba(221,185,123,0.24)",
            }}
          >
            {!imgError ? (
              <Image
                src="/hero-maiara.jpeg"
                alt="Dra. Maiara"
                fill
                unoptimized // Garante compatibilidade total com Hostinger
                priority // Carrega esta imagem com prioridade máxima (LCP)
                className="object-cover object-top transition-all duration-700 filter grayscale-[15%] hover:grayscale-0"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(212,255,0,0.06)" }}
              >
                <div className="text-center px-6">
                  <Image
                    src="/maiara-logo.svg"
                    alt="Logo"
                    width={64}
                    height={64}
                    unoptimized
                  />
                  <p className="mt-4 text-[var(--color-deep-blue)]/80 text-sm">
                    Dra. Maiara
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Logo flutuante */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:flex absolute -top-6 -right-6 w-20 h-20 bg-[var(--color-off-white)] rounded-full p-2 shadow-lg border border-[var(--color-gold)]/20 items-center justify-center z-20"
          >
            <Image
              src="/maiara-logo.svg"
              alt="Logo"
              width={40}
              height={40}
              unoptimized
            />
          </motion.div>

          <div
            className="absolute -bottom-6 -left-6 w-full h-full rounded-[180px_180px_24px_24px] -z-10 pointer-events-none"
            style={{ border: "2px solid rgba(212,255,0,0.06)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
