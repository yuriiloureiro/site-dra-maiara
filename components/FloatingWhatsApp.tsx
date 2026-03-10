"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  const number = "5588998022119";
  const message = "Olá, gostaria de agendar uma avaliação — site";
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed z-50 right-6 bottom-24">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para agendar"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] text-white focus:outline-none"
        style={{ backgroundColor: "#25D366" }} // Forçando a cor oficial aqui
      >
        <Phone className="w-7 h-7 text-white" fill="white" />
      </motion.a>
    </div>
  );
}
