"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O que é a avaliação neuropsicológica?",
    answer:
      "A avaliação neuropsicológica é um processo que investiga as funções cognitivas, emocionais e comportamentais de uma pessoa para identificar possíveis déficits ou dificuldades.",
  },
  {
    question: "Para quem a avaliação neuropsicológica é indicada?",
    answer:
      "Ela pode ser realizada por crianças a partir de 7 anos, adolescentes, adultos e idosos que apresentem queixas cognitivas, emocionais ou comportamentais.",
  },
  {
    question: "Você realiza atendimento de crianças e adolescentes?",
    answer:
      "Atendo crianças e adolescentes apenas para Avaliação Neuropsicológica, de forma presencial.",
  },
  {
    question: "A avaliação é dolorosa ou invasiva?",
    answer:
      "Não. A avaliação neuropsicológica é um processo tranquilo que envolve entrevistas e testes realizados em um ambiente acolhedor e respeitoso.",
  },
  {
    question:
      "Qual a diferença entre Avaliação Psicológica e Neuropsicológica?",
    answer:
      "A avaliação psicológica foca em aspectos emocionais e comportamentais, enquanto a avaliação neuropsicológica investiga o funcionamento do cérebro e das funções cognitivas.",
  },
  {
    question: "Preciso de indicação médica ou encaminhamento?",
    answer: "Não é necessário encaminhamento médico para realizar a avaliação.",
  },
  {
    question: "A avaliação é confidencial?",
    answer:
      "Sim. Todos os dados e resultados são tratados com sigilo e ética profissional.",
  },
  {
    question: "O que é entregue ao final da avaliação?",
    answer:
      "É entregue um laudo detalhado com os resultados, conclusões e possíveis encaminhamentos.",
  },
  {
    question: "A avaliação pode ser usada em processos jurídicos?",
    answer:
      "Sim. O laudo pode ser utilizado como documento em situações legais, desde que solicitado previamente e com as especificações necessárias.",
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
              transition={{ delay: index * 0.06 }}
              className="border-b border-gold/10"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full py-6 flex items-center justify-between text-left group"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-panel-${index}`}
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
                    id={`faq-panel-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
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
