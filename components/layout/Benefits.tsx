"use client";
import { ShieldCheck, BookOpen, FileText } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Atendimento Humanizado",
    description:
      "Ambiente acolhedor e livre de julgamentos, focado no cuidado ético e respeitoso com cada paciente.",
  },
  {
    icon: BookOpen,
    title: "Base Científica",
    description:
      "Avaliações e tratamentos fundamentados em pesquisas atualizadas e técnicas neuropsicológicas reconhecidas.",
  },
  {
    icon: FileText,
    title: "Laudos Detalhados",
    description:
      "Relatórios claros, completos e personalizados, que auxiliam no diagnóstico e encaminhamentos precisos.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-gold)] font-bold mb-4 block"
          >
            Diferenciais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-[var(--color-deep-blue)]"
            style={{ fontFamily: "serif" } as any}
          >
            Por que escolher a <span className="italic">Maiara Martins</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center px-6"
            >
              <div className="text-[var(--color-gold)] mb-6">
                <Icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-deep-blue)] mb-3">
                {title}
              </h3>
              <p className="text-[var(--color-deep-blue)]/80 leading-relaxed text-base max-w-sm">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
