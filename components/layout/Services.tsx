"use client";
import { motion } from "framer-motion";
import { Brain, Users, Heart, Sparkles } from "lucide-react";

const services = [
  {
    title: "Psicoterapia Individual",
    description:
      "Um espaço seguro para tratar ansiedade, depressão e processos de autoconhecimento.",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    title: "Neuropsicologia",
    description:
      "Avaliação detalhada das funções cognitivas e reabilitação personalizada.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    title: "Terapia para Adultos",
    description:
      "Apoio especializado para lidar com transições de carreira, luto e relacionamentos.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Desenvolvimento Pessoal",
    description:
      "Foco em potencializar suas habilidades e construir uma vida com mais propósito.",
    icon: <Sparkles className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[var(--color-off-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--color-gold)] font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block"
          >
            Especialidades
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-[var(--color-deep-blue)]"
            style={{ fontFamily: "var(--font-trajan)" }}
          >
            Como posso te <span className="italic font-serif">ajudar</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2rem] border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/40 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-[var(--color-gold)]/5"
            >
              <div className="text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-[var(--color-deep-blue)] mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--color-deep-blue)]/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
