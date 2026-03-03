"use client";
import { motion } from "framer-motion";

const diagnostics = [
  {
    title: "TDAH",
    category: "Transtorno do Déficit de Atenção com Hiperatividade",
  },
  { title: "TEA", category: "Transtorno do Espectro Autista" },
  { title: "TOD", category: "Transtorno Opositor Desafiador" },
  { title: "Ansiedade", category: "Transtornos de Ansiedade e Pânico" },
  { title: "Depressão", category: "Transtornos do Humor e Afetivos" },
  { title: "TOC", category: "Transtorno Obsessivo-Compulsivo" },
  { title: "Demências", category: "Alzheimer e Comprometimento Cognitivo" },
  {
    title: "Dificuldades",
    category: "Transtornos de Aprendizagem (Dislexia, etc)",
  },
];

export default function Diagnostics() {
  return (
    <section id="diagnostics" className="py-32 bg-[var(--color-off-white)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold mb-4 block"
            >
              Especialidades Clínicas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-light leading-tight text-[var(--color-deep-blue)]"
              style={{ fontFamily: "serif" } as any}
            >
              Destaques dos Principais <br />
              <span className="italic text-[var(--color-gold)]">
                Diagnósticos
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--color-deep-blue)]/60 max-w-xs text-sm leading-relaxed font-light border-l border-[var(--color-gold)]/30 pl-6"
          >
            Investigação clínica detalhada para auxiliar no fechamento de
            diagnósticos complexos e direcionamento terapêutico.
          </motion.p>
        </div>

        {/* Grid de Diagnósticos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diagnostics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
              className="bg-white/40 backdrop-blur-sm border border-[var(--color-gold)]/10 p-8 rounded-3xl transition-all duration-500 group"
            >
              <h3 className="text-2xl font-serif italic text-[var(--color-gold)] mb-2 group-hover:scale-105 transition-transform duration-500">
                {item.title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-deep-blue)]/50 font-bold leading-tight">
                {item.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Nota de Rodapé */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-[11px] italic text-[var(--color-deep-blue)]/40">
            * A avaliação é um processo investigativo que auxilia, mas não
            substitui a soberania do diagnóstico médico quando necessário.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
