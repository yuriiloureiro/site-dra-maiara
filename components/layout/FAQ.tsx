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
    question: "A avaliação é invasiva?",
    answer:
      "Não. A avaliação neuropsicológica é um processo ético, não invasivo, sigiloso e conduzido de forma acolhedora. Envolve entrevistas clínicas e a aplicação de testes, tendo foco no bem-estar e no respeito ao paciente em todas as etapas.",
  },
  {
    question:
      "Qual a diferença entre Avaliação Psicológica e Neuropsicológica?",
    answer:
      "A avaliação psicológica foca em aspectos emocionais e comportamentais, enquanto a avaliação neuropsicológica investiga o funcionamento do cérebro e das funções cognitivas.",
  },
  {
    question: "Preciso de indicação médica ou encaminhamento?",
    answer:
      "Não é necessário encaminhamento médico. A avaliação pode ser realizada por demanda espontânea (autoencaminhamento) ou por solicitação de profissionais das áreas da saúde, educação ou do contexto jurídico.",
  },
  {
    question: "O que é entregue na devolutiva ao final da avaliação?",
    answer:
      "Ao final do processo, é realizada uma sessão devolutiva, acompanhada da entrega do laudo especializado, contendo a análise dos resultados, a integração das informações, além de recomendações e possíveis encaminhamentos.",
  },
  {
    question: "A avaliação pode ser usada em processos jurídicos?",
    answer:
      "Sim. O laudo psicológico pode ser utilizado como documento técnico em contextos jurídicos, desde que essa finalidade seja previamente informada, permitindo a adequação dos procedimentos às exigências legais e normativas vigentes.",
  },
  {
    question: "Quanto tempo dura o processo de avaliação?",
    answer:
      "A duração varia conforme a complexidade da demanda, sendo geralmente realizada em cerca de cinco sessões, incluindo entrevistas, aplicação de testes e devolutiva final com a entrega do laudo detalhado.",
  },
  {
    question: "A avaliação fecha diagnóstico?",
    answer:
      "A avaliação contribui significativamente para o processo diagnóstico, oferecendo dados técnicos e fundamentados que auxiliam na confirmação, exclusão ou melhor compreensão de hipóteses diagnósticas.",
  },
  {
    question:
      "A avaliação inclui orientações e encaminhamentos após o resultado?",
    answer:
      "Sim. No dia da entrega do laudo, são fornecidas orientações e encaminhamentos individualizados, com base nas necessidades de cada paciente. Essas orientações podem incluir indicação para acompanhamento psicológico, psiquiátrico, psicopedagógico ou outras intervenções pertinentes.",
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
