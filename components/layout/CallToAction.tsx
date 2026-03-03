"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  const whatsappUrl = "https://wa.me/5588998022119";

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-deep-blue)]">
      {/* Efeito de profundidade no fundo */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-gold) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-6xl font-light mb-8 leading-tight text-white"
            style={{ fontFamily: "serif" } as any}
          >
            Clareza e segurança para o seu <br />
            <span className="italic text-[var(--color-gold)]">
              próximo passo.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Agende sua avaliação e obtenha um direcionamento técnico e
            humanizado para a sua jornada de compreensão e equilíbrio.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-gold)] text-[var(--color-deep-blue)] rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-[var(--color-gold)]/20"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z" />
            </svg>
            AGENDAR VIA WHATSAPP
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
