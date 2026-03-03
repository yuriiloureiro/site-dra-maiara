"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Anamnese",
    description:
      "Entrevista inicial para entender a queixa, histórico clínico, comportamental e familiar do paciente.",
  },
  {
    number: "02",
    title: "Aplicação de testes",
    description:
      "Aplicação de testes neuropsicológicos específicos para avaliar funções cognitivas, como memória, atenção e linguagem.",
  },
  {
    number: "03",
    title: "Entrevistas Profissionais",
    description:
      "Coleta de informações com profissionais que acompanham o paciente, como psicólogos, médicos ou professores.",
  },
  {
    number: "04",
    title: "Entrevistas Próximas",
    description:
      "Conversas com familiares ou pessoas próximas para entender o comportamento do paciente em diferentes contextos.",
  },
  {
    number: "05",
    title: "Devolutiva",
    description:
      "Apresentação dos principais resultados da avaliação e orientações detalhadas sobre os próximos passos.",
  },
  {
    number: "06",
    title: "Entrega do Laudo",
    description:
      "Entrega do laudo técnico com histórico, resultados, conclusões e recomendações personalizadas.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold mb-4 block"
          >
            O Processo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light leading-[1.15]"
            style={
              { color: "var(--color-deep-blue)", fontFamily: "serif" } as any
            }
          >
            Etapas da Avaliação
            <br />
            <span className="italic text-[var(--color-gold)] block mt-2">
              Neuropsicológica
            </span>
          </motion.h2>
        </div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="relative flex flex-col items-center text-center px-4"
            >
              {/* Número Estilizado Premium */}
              <div className="relative mb-6 flex items-center justify-center">
                <span
                  className="text-6xl md:text-7xl font-serif italic opacity-10 select-none leading-none"
                  style={{ color: "var(--color-deep-blue)" }}
                >
                  {step.number}
                </span>

                {/* Ponto dourado discreto */}
                <div className="absolute bottom-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] translate-y-4" />
                </div>
              </div>

              {/* Título e linha */}
              <h3 className="text-xs md:text-sm font-bold mb-3 uppercase tracking-[0.28em] text-[var(--color-deep-blue)]">
                {step.title}
              </h3>
              <div className="w-10 h-px bg-[var(--color-gold)]/30 mb-4 transition-all duration-300" />

              {/* Descrição */}
              <p className="text-[var(--color-deep-blue)]/70 leading-relaxed text-sm max-w-[300px] font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Rodapé compacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-[var(--color-gold)]/10 bg-[var(--color-off-white)]/30">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[var(--color-deep-blue)]/60">
              Processo ético • técnico • individualizado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
