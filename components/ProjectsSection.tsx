"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { Terminal, Layers, ShieldCheck, Video, Image as ImageIcon, Maximize2, X } from "lucide-react";
import Image from "next/image";

interface ProjectsSectionProps {
  lang: 'en' | 'es';
}

export default function ProjectsSection({ lang }: ProjectsSectionProps) {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; url: string } | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {lang === 'es' ? 'Proyectos Clave y Sistemas' : 'Key Projects & Systems'}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            {lang === 'es' 
              ? 'Arquitecturas robustas, motores financieros y plataformas transaccionales de alto rendimiento.'
              : 'Robust architectures, financial engines, and high-performance transactional platforms.'}
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 backdrop-blur-sm hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Categoría, Estatus y Rol */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-400 text-xs font-mono font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    {project.category}
                  </span>

                  {project.status && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {project.status[lang]}
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title[lang]}
                </h3>

                {/* Rol en el Proyecto */}
                <p className="text-xs font-mono text-blue-400 mb-3">
                  {lang === 'es' ? 'Rol' : 'Role'}: <span className="text-slate-300">{project.role[lang]}</span>
                </p>

                {/* Descripción Larga o Corta */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {(project.longDescription ? project.longDescription[lang] : null) || project.description[lang]}
                </p>

                {/* Contenedor Multimedia / Preview */}
                <div className="mb-6 rounded-xl bg-slate-950/80 border border-slate-800 overflow-hidden group-hover:border-slate-700 transition-all">
                  {project.screenshots && project.screenshots.length > 0 ? (
                    <div 
                      className="relative w-full h-64 sm:h-72 bg-slate-900 cursor-pointer overflow-hidden group/img"
                      onClick={() => setSelectedMedia({ type: 'image', url: project.screenshots![0] })}
                    >
                      <Image 
                        src={project.screenshots[0]} 
                        alt={project.title[lang]}
                        fill
                        className="object-contain bg-slate-950 hover:scale-105 transition-transform duration-500 p-1"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono">
                        <Maximize2 className="w-4 h-4" /> {lang === 'es' ? 'Ampliar imagen' : 'Expand image'}
                      </div>
                    </div>
                  ) : project.videoDemo ? (
                    <div className="relative w-full h-64 sm:h-72 bg-slate-900 flex items-center justify-center group/vid">
                      <video 
                        src={project.videoDemo} 
                        controls 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        onClick={() => setSelectedMedia({ type: 'video', url: project.videoDemo! })}
                        className="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 opacity-0 group-hover/vid:opacity-100 transition-opacity border border-slate-700 shadow-lg"
                      >
                        <Maximize2 className="w-3.5 h-3.5" /> {lang === 'es' ? 'Expandir video' : 'Expand video'}
                      </button>
                    </div>
                  ) : (
                    <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                        <span className="flex items-center gap-1">
                          <ImageIcon className="w-4 h-4 text-blue-400" /> Gallery Ready
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Video className="w-4 h-4 text-indigo-400" /> Video Demo Supported
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        {lang === 'es' 
                          ? 'Espacio preparado para previsualización multimedia o demostración en video del sistema.'
                          : 'Space prepared for multimedia preview or video system demonstration.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Stack Tecnológico */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
                  <Layers className="w-3.5 h-3.5 text-blue-500" />
                  <span>{lang === 'es' ? 'Stack Tecnológico:' : 'Tech Stack:'}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox para Imágenes y Videos a Pantalla Completa */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full transition-all z-10"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <div className="relative w-full h-full">
                  <Image 
                    src={selectedMedia.url} 
                    alt="Vista ampliada del sistema"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <video 
                  src={selectedMedia.url} 
                  controls 
                  autoPlay
                  className="w-full h-full object-contain rounded-xl shadow-2xl"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}