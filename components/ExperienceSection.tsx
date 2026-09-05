"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceSectionProps {
  lang: 'en' | 'es';
}

export default function ExperienceSection({ lang }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {lang === 'es' ? 'Trayectoria Profesional' : 'Professional Experience'}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            {lang === 'es' 
              ? 'Liderazgo técnico, transformación digital y desarrollo de sistemas críticos de alta disponibilidad.'
              : 'Technical leadership, digital transformation, and development of high-availability critical systems.'}
          </p>
        </div>

        {/* Timeline / Lista de Experiencias */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Indicador de Punto en el Timeline */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />

              {/* Fecha lateral (Visible en desktop fuera de la línea) */}
              <div className="hidden md:block absolute -left-32 top-1 w-24 text-right text-xs font-mono text-blue-400 font-semibold">
                {exp.period}
              </div>

              {/* Tarjeta de Experiencia */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-slate-700 transition-all shadow-xl">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {exp.role[lang]}
                  </h3>
                  <span className="md:hidden inline-flex items-center gap-1 text-xs font-mono text-blue-400 bg-blue-950/50 px-2.5 py-1 rounded-md w-fit border border-blue-900/50">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-blue-400 font-medium text-sm mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 text-xs flex items-center gap-1 font-normal">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {exp.location}
                  </span>
                </p>

                {/* Lista de responsabilidades / logros */}
                <ul className="space-y-3 mb-6 text-slate-300 text-sm leading-relaxed">
                  {exp.description[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Habilidades / Tecnologías usadas */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}