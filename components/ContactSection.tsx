"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Send, Globe, Code } from "lucide-react";

interface ContactSectionProps {
  lang: 'en' | 'es';
}

export default function ContactSection({ lang }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {lang === 'es' ? 'Contacto y Oportunidades' : 'Contact & Opportunities'}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            {lang === 'es' 
              ? 'Abierto a evaluar propuestas de arquitectura de software, liderazgo técnico y proyectos de impacto internacional (relocation).'
              : 'Open to evaluating software architecture proposals, technical leadership, and international impact projects (relocation).'}
          </p>
        </div>

        {/* Tarjeta de Contacto Central */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {lang === 'es' ? 'Iniciemos una conversación' : "Let's start a conversation"}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              {lang === 'es'
                ? 'Si buscas un perfil senior con sólida experiencia en el ecosistema backend, microservicios y gestión de infraestructura crítica, hablemos.'
                : "If you are looking for a senior profile with solid experience in the backend ecosystem, microservices, and critical infrastructure management, let's talk."}
            </p>

            <div className="space-y-4 text-sm">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-900/50 flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-900/50 flex items-center justify-center text-blue-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{personalInfo.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-900/50 flex items-center justify-center text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personalInfo.location} (Global Ready)</span>
              </div>
            </div>
          </div>

          {/* Formulario rápido o Botón de Acción Directa */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-center gap-6">
            <h4 className="text-lg font-semibold text-white">
              {lang === 'es' ? 'Canales Profesionales' : 'Professional Channels'}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'es' 
                ? 'Conecta de manera directa a través de mis perfiles oficiales:'
                : 'Connect directly through my official profiles:'}
            </p>

            <div className="flex flex-col gap-3">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-sm font-medium transition-all"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  {lang === 'es' ? 'Perfil de LinkedIn' : 'LinkedIn Profile'}
                </span>
                <Send className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white text-sm font-medium transition-all"
              >
                <span className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-slate-300" />
                  {lang === 'es' ? 'Repositorio GitHub' : 'GitHub Repository'}
                </span>
                <Send className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            <a 
              href={`mailto:${personalInfo.email}?subject=${lang === 'es' ? 'Interés en perfil profesional - Relocation' : 'Professional Profile Interest - Relocation'}`}
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center text-sm transition-all shadow-lg shadow-blue-600/20 mt-2"
            >
              {lang === 'es' ? 'Enviar Correo Directo' : 'Send Direct Email'}
            </a>
          </div>
        </motion.div>

        {/* Footer integrado */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <p className="font-mono mt-2 sm:mt-0">Designed for Senior Impact & Global Relocation</p>
        </div>

      </div>
    </section>
  );
}