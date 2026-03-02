"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e escuta. Nela, vamos entender suas demandas, alinhar expectativas e explicar como funciona o processo terapêutico de forma personalizada para você.",
  },
  {
    question: "Qual a duração e frequência das sessões?",
    answer:
      "As sessões individuais têm duração média de 50 minutos. Geralmente, a frequência recomendada é semanal, mas isso pode ser ajustado conforme a necessidade e o momento de cada paciente.",
  },
  {
    question: "Você atende convênios médicos?",
    answer:
      "Trabalho com atendimento particular, mas emito recibos para que você possa solicitar o reembolso junto ao seu plano de saúde, caso ele ofereça essa modalidade.",
  },
  {
    question: "Como é feito o atendimento online?",
    answer:
      "O atendimento online é realizado via videochamada em uma plataforma segura e sigilosa. A eficácia é a mesma do presencial, com a conveniência de você estar no conforto do seu ambiente.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.2em] uppercase text-[10px] mb-4 block"
          >
            Dúvidas Comuns
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-light text-deep-blue"
            style={{ fontFamily: "var(--font-trajan)" }}
          >
            Perguntas <span className="italic font-serif">Frequentes</span>
          </h2>
        </div>

        {/* Lista de FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gold/10"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-light text-deep-blue group-hover:text-gold transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="text-gold ml-4">
                  {activeIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-deep-blue/60 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
