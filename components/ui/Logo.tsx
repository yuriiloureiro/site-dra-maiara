"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  className?: string;
  title?: string;
};

export default function Logo({
  className = "w-10 h-10",
  title = "Logo Dra. Maiara",
}: Props) {
  return (
    <motion.svg
      viewBox="0 0 375 375"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      style={{ display: "block" }}
    >
      <title>{title}</title>

      {/* Grupo principal: traços controlados por `currentColor` */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Arco externo / moldura */}
        <path d="M47 0 H328 A47 47 0 0 1 375 47 V328 A47 47 0 0 1 328 375 H47 V0 Z" />

        {/* Caule central */}
        <path d="M187.5 110 L187.5 335" />

        {/* Folhas / linhas horizontais curvas (três camadas) */}
        <path d="M47 175 C120 170 254 170 328 175" />
        <path d="M47 235 C120 230 254 230 328 235" />
        <path d="M47 295 C120 290 254 290 328 295" />

        {/* Flor / Tulipa no topo (síntese em forma de M/tulipa) */}
        <path d="M140 95 L187.5 140 L235 95" />
        <path d="M140 95 C140 60 235 60 235 95 C235 125 187.5 155 187.5 155 C187.5 155 140 125 140 95 Z" />
      </g>
    </motion.svg>
  );
}
