"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-32 px-6 overflow-hidden relative bg-[var(--color-deep-blue)] text-[var(--color-off-white)]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full -z-0"
        style={{
          backgroundColor: "var(--color-gold)",
          filter: "blur(120px)",
          opacity: 0.1,
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light mb-8 leading-tight"
          style={{ fontFamily: "var(--font-trajan)" }}
        >
          Dê o primeiro passo para <br />
          <span className="italic font-serif text-[var(--color-gold)]">
            cuidar de você.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-off-white)]/70 mb-12 max-w-2xl mx-auto font-light"
        >
          Agende sua consulta online e comece sua jornada de autoconhecimento e
          equilíbrio emocional hoje mesmo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://wa.me/558898022119"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-gold)] text-[var(--color-deep-blue)] px-12 py-5 rounded-full text-sm font-bold tracking-widest hover:bg-[var(--color-off-white)] transition-all duration-500 shadow-2xl shadow-[var(--color-gold)]/20 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            AGENDAR VIA WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
