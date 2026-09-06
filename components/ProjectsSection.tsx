"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { Terminal, Layers, ShieldCheck, Video, Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface ProjectsSectionProps {
  lang: 'en' | 'es';
}

export default function ProjectsSection({ lang }: ProjectsSectionProps) {
  // Estado para el modal Lightbox con soporte de medios mixtos
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    mediaList: { type: 'image' | 'video'; url: string }[];
    currentIndex: number;
  }>({
    isOpen: false,
    mediaList: [],
    currentIndex: 0
  });
  
  // Estado para llevar el control del índice activo en cada tarjeta de proyecto
  const [activeMediaIndices, setActiveMediaIndices] = useState<{ [key: string]: number }>({});

  // Helper para construir la lista combinada priorizando el video al inicio si existe
  const getProjectMediaList = (project: typeof projects[0]) => {
    const list: { type: 'image' | 'video'; url: string }[] = [];
    if (project.videoDemo) {
      list.push({ type: 'video', url: project.videoDemo });
    }
    if (project.screenshots && project.screenshots.length > 0) {
      project.screenshots.forEach(url => list.push({ type: 'image', url }));
    }
    return list;
  };

  const handleNextCardMedia = (projectId: string, totalMedia: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndices(prev => {
      const currentIndex = prev[projectId] || 0;
      const nextIndex = (currentIndex + 1) % totalMedia;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const handlePrevCardMedia = (projectId: string, totalMedia: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMediaIndices(prev => {
      const currentIndex = prev[projectId] || 0;
      const prevIndex = (currentIndex - 1 + totalMedia) % totalMedia;
      return { ...prev, [projectId]: prevIndex };
    });
  };

  // Funciones para navegar dentro del Lightbox abierto sin cerrarlo
  const handleNextLightboxMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxData.mediaList.length <= 1) return;
    const nextIdx = (lightboxData.currentIndex + 1) % lightboxData.mediaList.length;
    setLightboxData(prev => ({ ...prev, currentIndex: nextIdx }));
  };

  const handlePrevLightboxMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxData.mediaList.length <= 1) return;
    const prevIdx = (lightboxData.currentIndex - 1 + lightboxData.mediaList.length) % lightboxData.mediaList.length;
    setLightboxData(prev => ({ ...prev, currentIndex: prevIdx }));
  };

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
          {projects.map((project, index) => {
            const mediaList = getProjectMediaList(project);
            const hasMedia = mediaList.length > 0;
            const currentIdx = activeMediaIndices[project.id] || 0;
            const currentMedia = hasMedia ? mediaList[currentIdx] : null;

            return (
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

                  {/* Contenedor Multimedia / Carrusel Unificado */}
                  <div className="mb-6 rounded-xl bg-slate-950/80 border border-slate-800 overflow-hidden group-hover:border-slate-700 transition-all">
                    {hasMedia && currentMedia ? (
                      <div 
                        className="relative w-full h-64 sm:h-72 bg-slate-900 cursor-pointer overflow-hidden group/img"
                        onClick={() => setLightboxData({
                          isOpen: true,
                          mediaList: mediaList,
                          currentIndex: currentIdx
                        })}
                      >
                        {currentMedia.type === 'image' ? (
                          <img 
                            src={currentMedia.url} 
                            alt={`${project.title[lang]} - Media ${currentIdx + 1}`}
                            className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="relative w-full h-full flex items-center justify-center bg-black">
                            <video 
                              src={currentMedia.url} 
                              className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <div className="bg-blue-600/90 text-white p-4 rounded-full shadow-lg group-hover/img:scale-110 transition-transform">
                                <Play className="w-6 h-6 fill-current" />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Overlay de Ampliar */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono">
                          <Maximize2 className="w-4 h-4" /> {lang === 'es' ? (currentMedia.type === 'video' ? 'Reproducir video' : 'Ampliar imagen') : (currentMedia.type === 'video' ? 'Play video' : 'Expand image')}
                        </div>

                        {/* Controles de Tarjeta (si hay más de 1 elemento multimedia) */}
                        {mediaList.length > 1 && (
                          <>
                            <button
                              onClick={(e) => handlePrevCardMedia(project.id, mediaList.length, e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-slate-900 text-white p-1.5 rounded-full border border-slate-700/60 shadow-md transition-all opacity-80 group-hover/img:opacity-100 z-10"
                              title="Anterior"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => handleNextCardMedia(project.id, mediaList.length, e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-950/70 hover:bg-slate-900 text-white p-1.5 rounded-full border border-slate-700/60 shadow-md transition-all opacity-80 group-hover/img:opacity-100 z-10"
                              title="Siguiente"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>

                            <div className="absolute bottom-2 right-3 bg-slate-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 border border-slate-800 z-10">
                              {currentIdx + 1} / {mediaList.length} {currentMedia.type === 'video' ? '🎬' : '🖼️'}
                            </div>
                          </>
                        )}
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
            );
          })}
        </div>

      </div>

      {/* Modal Lightbox Avanzado con Soporte de Medios Mixtos y Navegación Interna */}
      <AnimatePresence>
        {lightboxData.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
          >
            {/* Botón Cerrar */}
            <button 
              className="absolute top-6 right-6 text-white bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full transition-all z-20 shadow-xl"
              onClick={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Contenedor Principal del Lightbox */}
            <div 
              className="relative w-full max-w-6xl h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxData.mediaList[lightboxData.currentIndex]?.type === 'image' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={lightboxData.mediaList[lightboxData.currentIndex].url} 
                    alt="Vista ampliada del sistema"
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
              ) : (
                <video 
                  src={lightboxData.mediaList[lightboxData.currentIndex].url} 
                  controls 
                  autoPlay
                  className="w-full h-full object-contain rounded-xl shadow-2xl bg-black"
                />
              )}

              {/* Controles de Navegación dentro del Lightbox (si hay más de 1 elemento) */}
              {lightboxData.mediaList.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevLightboxMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full border border-slate-700 shadow-2xl transition-all z-20"
                    title="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={handleNextLightboxMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full border border-slate-700 shadow-2xl transition-all z-20"
                    title="Siguiente"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Contador indicador en el Lightbox */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-700 px-4 py-1.5 rounded-full text-xs font-mono text-white shadow-xl z-20 flex items-center gap-2">
                    <span>{lightboxData.currentIndex + 1} / {lightboxData.mediaList.length}</span>
                    <span className="text-slate-400">({lightboxData.mediaList[lightboxData.currentIndex].type === 'video' ? 'Video' : 'Imagen'})</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}