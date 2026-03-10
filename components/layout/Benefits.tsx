"use client";
import { UserCheck, Clipboard, FileText } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: UserCheck,
    title: "Atendimento",
    description:
      "Atendimento 100% online, com segurança, flexibilidade e condução ética em todas as etapas do processo avaliativo.",
  },
  {
    icon: Clipboard,
    title: "Testagem",
    description:
      "Aplicação de testes padrão-ouro para avaliação de atenção, memória, inteligência, funções executivas e demais funções cognitivas.",
  },
  {
    icon: FileText,
    title: "Laudo",
    description:
      "Emissão de laudos em até 48 horas para demandas específicas, com validade nacional e em conformidade com as normas do CFP.",
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
            Avaliação Neuropsicológica{" "}
            <span className="italic">Especializada</span>
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
