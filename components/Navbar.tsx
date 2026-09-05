"use client";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-wider text-white flex items-center gap-2">
          <span className="text-blue-500 font-mono">&lt;</span>
          YASSER.DEV
          <span className="text-blue-500 font-mono">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition-colors">
            {lang === 'es' ? 'Sobre Mí' : 'About'}
          </a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">
            {lang === 'es' ? 'Experiencia' : 'Experience'}
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            {lang === 'es' ? 'Proyectos' : 'Projects'}
          </a>

          {/* Selector de Idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-blue-400 transition-all"
            title="Cambiar Idioma / Change Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <div className="text-xs text-slate-400 font-mono border-l border-slate-800 pl-4">
            DO <span className="text-slate-600">/</span> <span className="text-slate-300">Global Ready</span>
          </div>

          <a 
            href="#contact" 
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            {lang === 'es' ? 'Contáctame' : 'Contact Me'}
          </a>
        </div>

        {/* Mobile Actions (Language + Hamburger) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-blue-400"
          >
            <Globe className="w-3 h-3" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 px-6 py-6 flex flex-col gap-4 shadow-xl">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
            {lang === 'es' ? 'Sobre Mí' : 'About'}
          </a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
            {lang === 'es' ? 'Experiencia' : 'Experience'}
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
            {lang === 'es' ? 'Proyectos' : 'Projects'}
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-blue-400 font-semibold">
            {lang === 'es' ? 'Contáctame' : 'Contact Me'}
          </a>
        </div>
      )}
    </nav>
  );
}