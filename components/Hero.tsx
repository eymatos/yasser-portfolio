"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { ArrowRight, Terminal, ShieldCheck, Globe2, Cpu, Code } from "lucide-react";

interface HeroProps {
  lang: 'en' | 'es';
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden bg-slate-950">
      
      {/* Fondo Tecnológico Animado (Grid y partículas de luz) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background Glow Elements Dinámicos */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Elementos flotantes decorativos estilo código / terminal */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hidden lg:flex absolute left-12 top-1/3 items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/40 border border-slate-800/80 backdrop-blur-md text-xs font-mono text-blue-400"
      >
        <Code className="w-4 h-4 text-blue-500 animate-pulse" />
        <span>architecture.ts --strict</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden lg:flex absolute right-12 bottom-1/3 items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/40 border border-slate-800/80 backdrop-blur-md text-xs font-mono text-indigo-400"
      >
        <Cpu className="w-4 h-4 text-indigo-500 animate-spin" style={{ animationDuration: '10s' }} />
        <span>Microservices & DDD Active</span>
      </motion.div>

      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        
        {/* Ubicación y enfoque discreto */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs md:text-sm mb-6 shadow-inner"
        >
          <Globe2 className="w-4 h-4 text-blue-400" />
          <span>{lang === 'es' ? 'Base en Santo Domingo, DO' : 'Based in Santo Domingo, DO'}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">{personalInfo.relocationTarget[lang]}</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          {lang === 'es' ? 'Arquitectura de Software y ' : 'Software Architecture & '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            {lang === 'es' ? 'Backend Senior' : 'Senior Backend'}
          </span>
        </motion.h1>

        {/* Subtítulo y Resumen */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed"
        >
          {personalInfo.summary[lang]}
        </motion.p>

        {/* Botones de Acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 group"
          >
            {lang === 'es' ? 'Ver Proyectos Clave' : 'View Key Projects'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold border border-slate-800 transition-all"
          >
            <Terminal className="w-4 h-4 text-blue-400" />
            {lang === 'es' ? 'Contactar' : 'Contact Me'}
          </a>
        </motion.div>

        {/* Métricas o Puntos Clave rápidos */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 pt-10 border-t border-slate-900 w-full max-w-3xl text-left"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <p className="text-2xl font-bold text-white">+{personalInfo.experienceYears} {lang === 'es' ? 'Años' : 'Years'}</p>
              <p className="text-xs text-slate-400">{lang === 'es' ? 'Experiencia en Ingeniería' : 'Engineering Experience'}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Terminal className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
            <div>
              <p className="text-2xl font-bold text-white">PHP & Python</p>
              <p className="text-xs text-slate-400">Symfony / Laravel / Django</p>
            </div>
          </div>
          <div className="hidden md:flex items-start gap-3">
            <Globe2 className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
            <div>
              <p className="text-2xl font-bold text-white">{lang === 'es' ? 'Escalabilidad' : 'Scalability'}</p>
              <p className="text-xs text-slate-400">{lang === 'es' ? 'Microservicios & DevOps' : 'Microservices & DevOps'}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}