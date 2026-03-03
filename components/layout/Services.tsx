"use client";
import { motion } from "framer-motion";
import { Brain, Users, Heart, FileText } from "lucide-react";

const services = [
  {
    title: "Psicoterapia Individual",
    description:
      "Atendimento para ansiedade, depressão, burnout e processos de autoconhecimento, com abordagem ética e personalizada.",
    icon: Heart, // componente (não JSX)
  },
  {
    title: "Avaliação Neuropsicológica",
    description:
      "Avaliação criteriosa das funções cognitivas (atenção, memória, linguagem, funções executivas) para crianças (a partir de 7 anos), adolescentes, adultos e idosos.",
    icon: Brain,
  },
  {
    title: "Supervisão e Mentoria",
    description:
      "Supervisão clínica e capacitação prática para psicólogos e estudantes, com foco em avaliações e aprimoramento técnico.",
    icon: Users,
  },
  {
    title: "Psicodiagnóstico",
    description:
      "Investigação diagnóstica para transtornos como ansiedade, depressão, TOC, TEPT e outros, com elaboração de laudos técnicos.",
    icon: FileText,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[var(--color-off-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
            style={{ fontFamily: "var(--font-trajan)" } as any}
          >
            Como posso te <span className="italic font-serif">ajudar</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[2rem] border border-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/40 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-[var(--color-gold)]/5"
              >
                <div className="text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium text-[var(--color-deep-blue)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--color-deep-blue)]/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
