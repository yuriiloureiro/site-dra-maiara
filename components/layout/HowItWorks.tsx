"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contato Inicial",
    description:
      "Agende uma consulta gratuita de 15 minutos para discutir suas preocupações e ver se minha abordagem é adequada para você. Sem pressão, apenas uma conversa.",
  },
  {
    number: "02",
    title: "Plano Personalizado",
    description:
      "Criarei um plano personalizado que se alinhe com seus objetivos, seja para controlar a ansiedade ou melhorar seus relacionamentos rompidos.",
  },
  {
    number: "03",
    title: "Sessões Online",
    description:
      "Participe de sessões individuais de qualquer lugar, usando videochamadas seguras. Trabalharemos juntos para superar desafios e acompanhar seu progresso.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-[var(--color-off-white)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-gold)] font-bold mb-4 block">
            O Processo
          </span>
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{ color: "var(--color-deep-blue)", fontFamily: "serif" }}
          >
            Simples, Conveniente e{" "}
            <span className="italic text-[var(--color-gold)]">Eficaz.</span>
          </h2>
        </div>

        {/* Grid de Passos */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Linha conectora (apenas desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-[var(--color-gold)]/20 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Círculo com Número */}
              <div className="w-24 h-24 rounded-full bg-[var(--color-off-white)] border border-[var(--color-gold)]/30 flex items-center justify-center mb-8 shadow-xl group-hover:border-[var(--color-gold)] transition-colors duration-500">
                <span
                  className="text-2xl font-light tracking-tighter"
                  style={{
                    color: "var(--color-deep-blue)",
                    fontFamily: "serif",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-[var(--color-deep-blue)]">
                {step.title}
              </h3>
              <p className="text-[var(--color-deep-blue)]/70 leading-relaxed text-sm max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Final Opcional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-deep-blue)]/40">
            Pronta para começar sua jornada?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
