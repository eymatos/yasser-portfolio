"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('es');

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <ExperienceSection lang={lang} />
      <ProjectsSection lang={lang} />
      <ContactSection lang={lang} />
    </main>
  );
}