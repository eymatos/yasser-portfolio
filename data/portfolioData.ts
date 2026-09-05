import { PersonalInfo, Project, Experience } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Esleidin Yasser Matos Lara",
  title: {
    en: "Senior PHP Developer & Software Architect",
    es: "Desarrollador PHP Senior y Arquitecto de Software"
  },
  location: "Santo Domingo, DO",
  relocationTarget: {
    en: "Open to International Relocation",
    es: "Disponible para Reubicación Internacional"
  },
  email: "esleidinmatos@gmail.com",
  phone: "+1-829-923-6320",
  linkedin: "https://www.linkedin.com/in/esleidin-matos",
  github: "https://github.com/eymatos",
  summary: {
    en: "Senior Systems Engineer with over 18 years of technical experience, specializing in the PHP ecosystem (Symfony/Laravel) and backend architecture. Expert in designing robust, scalable solutions using Domain-Driven Design (DDD), CQRS, and Microservices.",
    es: "Ingeniero en Sistemas con más de 18 años de experiencia técnica, especializado en el ecosistema PHP (Symfony/Laravel) y arquitectura backend. Experto en diseñar soluciones robustas y escalables utilizando Domain-Driven Design (DDD), CQRS y Microservicios."
  },
  experienceYears: 18,
};

export const experiences: Experience[] = [
  {
    id: "proconsumidor",
    company: "Instituto Nacional de Protección de los Derechos del Consumidor (ProConsumidor)",
    role: {
      en: "Director of Technology / Senior PHP Developer",
      es: "Director de Tecnología / Desarrollador PHP Senior"
    },
    period: "2015 – Present",
    location: "Santo Domingo, DO",
    description: {
      en: [
        "Led the design and development of scalable, high-availability institutional applications using PHP (Symfony components & Laravel), ensuring data integrity and system performance.",
        "Transitioned legacy monolithic systems into a modern Microservices architecture with RESTful APIs, facilitating the integration of SIDIP and PAC platforms.",
        "Standardized development and production environments using Docker, optimizing deployments via automated CI/CD pipelines.",
        "Managed advanced relational databases (MySQL/SQL Server) and proactive monitoring ensuring 24/7 availability."
      ],
      es: [
        "Lideré el diseño y desarrollo de aplicaciones institucionales escalables de alta disponibilidad utilizando PHP (componentes Symfony y Laravel), garantizando la integridad de datos y el rendimiento del sistema.",
        "Transicioné sistemas monolíticos heredados hacia una arquitectura moderna de microservicios con APIs RESTful, facilitando la integración de las plataformas SIDIP y PAC.",
        "Estandaricé los entornos de desarrollo y producción utilizando Docker, optimizando los despliegues mediante pipelines CI/CD automatizados.",
        "Administré bases de datos relacionales avanzadas (MySQL/SQL Server) y monitoreo proactivo asegurando disponibilidad 24/7."
      ]
    },
    skills: ["PHP 8.x", "Symfony", "Laravel", "Microservices", "Docker", "MySQL", "CI/CD", "AWS"]
  },
  {
    id: "jh-auto",
    company: "922 J&H Auto Corp",
    role: {
      en: "Full Stack Developer & Web Master",
      es: "Desarrollador Full Stack y Web Master"
    },
    period: "2009 – 2014",
    location: "Bronx, NY (Remote/Hybrid)",
    description: {
      en: [
        "Developed and managed e-commerce platforms and custom inventory systems using PHP, aligning with high-volume commercial needs.",
        "Integrated third-party payment gateways/APIs and optimized User Experience (UX) for commercial web applications.",
        "Managed Linux servers and database performance for high-traffic commercial environments."
      ],
      es: [
        "Desarrollé y administré plataformas de comercio electrónico y sistemas de inventario personalizados utilizando PHP, adaptados a necesidades comerciales de alto volumen.",
        "Integré pasarelas de pago y APIs de terceros, optimizando la Experiencia de Usuario (UX) para aplicaciones web comerciales.",
        "Gestioné servidores Linux y el rendimiento de bases de datos para entornos comerciales de alto tráfico."
      ]
    },
    skills: ["PHP", "JavaScript", "MySQL", "Linux Server Administration", "E-commerce"]
  }
];

export const projects: Project[] = [
  {
    id: "jurisai",
    title: {
      en: "JurisAI (Intelligent Legal Assistant)",
      es: "JurisAI (Asistente Legal Inteligente)"
    },
    role: {
      en: "Lead AI Architect & Developer",
      es: "Arquitecto Líder de IA y Desarrollador"
    },
    description: {
      en: "Artificial intelligence platform specialized in document analysis, legal queries, and automated legal processes using advanced language models.",
      es: "Plataforma de inteligencia artificial especializada en análisis documental, consultas jurídicas y automatización de procesos legales mediante modelos avanzados de lenguaje."
    },
    longDescription: {
      en: "AI-driven system for searching, indexing, and analyzing legal regulations and documents. Designed to optimize legal decision-making and file consultation in an automated manner.",
      es: "Sistema impulsado por IA para la búsqueda, indexación y análisis de normativas y documentos jurídicos. Diseñado para optimizar la toma de decisiones legales y la consulta de expedientes de manera automatizada."
    },
    techStack: ["Python", "JavaScript", "OpenAI / LLM APIs", "Vector Indexing", "Tailwind CSS"],
    category: "Python",
    featured: true,
    status: {
      en: "Active Platform / Legal Tech AI",
      es: "Plataforma Activa / Legal Tech AI"
    },
    screenshots: [],
    videoDemo: ""
  },
  {
    id: "gisef",
    title: {
      en: "GISEF Institutional Platform",
      es: "Plataforma Institucional GISEF"
    },
    role: {
      en: "Lead Developer & Architect",
      es: "Desarrollador Líder y Arquitecto"
    },
    description: {
      en: "Specialized institutional portal and membership management system for professional educational and social advancement initiatives.",
      es: "Portal institucional especializado y sistema de gestión de membresías para iniciativas profesionales de desarrollo educativo y social."
    },
    longDescription: {
      en: "Web platform designed to handle member registration, dissemination of educational resources, events management, and organizational transparency reports.",
      es: "Plataforma web diseñada para manejar el registro de miembros, divulgación de recursos educativos, gestión de eventos y reportes de transparencia organizacional."
    },
    techStack: ["WORDPRESS","PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Active Institutional Platform",
      es: "Plataforma Institucional Activa"
    },
    screenshots: ["/projects/gisef/dashboard.png"],
    videoDemo: ""
  },
  {
    id: "asktuto",
    title: {
      en: "AskTuto (Tutoring Marketplace Platform)",
      es: "AskTuto (Plataforma Marketplace de Tutorías)"
    },
    role: {
      en: "Lead Full Stack Developer",
      es: "Desarrollador Full Stack Líder"
    },
    description: {
      en: "Uber-style marketplace platform connecting educators and teachers with students for on-demand tutoring service bookings.",
      es: "Plataforma tipo marketplace estilo Uber que conecta a profesores y maestros con alumnos para la contratación y reserva de servicios de tutoría bajo demanda."
    },
    longDescription: {
      en: "An interactive peer-to-peer tutoring marketplace featuring a responsive landing page built with PHP and Bootstrap, powered by vanilla JavaScript for backend logic, API integrations, and real-time synchronization with Firebase databases.",
      es: "Un marketplace interactivo de tutorías entre pares con una landing page responsiva construida en PHP y Bootstrap, impulsada por JavaScript puro para la lógica del backend, integraciones de APIs y sincronización en tiempo real con bases de datos en Firebase."
    },
    techStack: ["PHP", "JavaScript", "Firebase", "Bootstrap", "APIs"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Production Ready / Marketplace Platform",
      es: "Listo para Producción / Plataforma Marketplace"
    },
    screenshots: ["/projects/asktuto/dashboard.png"],
    videoDemo: ""
  },
  {
    id: "myp-contrataciones",
    title: {
      en: "M&P Contrataciones (Personnel Recruitment System)",
      es: "M&P Contrataciones (Sistema de Reclutamiento de Personal)"
    },
    role: {
      en: "Lead Full Stack Developer",
      es: "Desarrollador Full Stack Líder"
    },
    description: {
      en: "Specialized recruitment and human talent platform designed to streamline applicant tracking, evaluations, and hiring workflows.",
      es: "Plataforma especializada de reclutamiento y talento humano diseñada para optimizar el seguimiento de aspirantes, evaluaciones y flujos de contratación."
    },
    longDescription: {
      en: "Web application developed to manage candidate pipelines, resume indexing, interview scheduling, and evaluation tracking under clean MVC standards.",
      es: "Aplicación web desarrollada para gestionar flujos de candidatos, indexación de currículums, programación de entrevistas y seguimiento de evaluaciones bajo estándares limpios de MVC."
    },
    techStack: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Production System / Recruitment Platform",
      es: "Sistema en Producción / Plataforma de Reclutamiento"
    },
    screenshots: [],
    videoDemo: ""
  },
  {
    id: "junta-vecinos",
    title: {
      en: "Neighborhood Association Accounting & Management System",
      es: "Sistema Contable y Gestión de Junta de Vecinos"
    },
    role: {
      en: "Lead Software Architect",
      es: "Arquitecto de Software Líder"
    },
    description: {
      en: "Comprehensive web platform for financial administration, community fee tracking, income reports, and resident management.",
      es: "Plataforma web integral para la administración financiera, control de cuotas comunitarias, reportes de ingresos y gestión de residentes."
    },
    longDescription: {
      en: "Specialized accounting solution for transparent community resource management. Enables detailed tracking of contributions, expense control, financial statements generation, and member registry management.",
      es: "Solución contable especializada para la administración transparente de recursos comunitarios. Permite llevar el registro detallado de aportes, control de gastos, generación de estados financieros y gestión de padrón de asociados."
    },
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Production System / Financial Management",
      es: "Sistema en Producción / Gestión Financiera"
    },
    screenshots: [],
    videoDemo: ""
  },
  {
    id: "medismart",
    title: {
      en: "MediSmart RD",
      es: "MediSmart RD"
    },
    role: {
      en: "Lead Full Stack & AI Integrator",
      es: "Integrador Líder Full Stack y de IA"
    },
    description: {
      en: "Web-based medical practice management platform incorporating artificial intelligence features for clinical optimization.",
      es: "Plataforma web de gestión de consultorios médicos que incorpora funciones de inteligencia artificial para la optimización clínica."
    },
    longDescription: {
      en: "Web-based medical practice management platform incorporating advanced AI capabilities to assist in clinical workflows, patient management, and operational automation.",
      es: "Plataforma web de gestión médica que incorpora capacidades avanzadas de IA para asistir en flujos clínicos, manejo de pacientes y automatización operativa."
    },
    techStack: ["PHP", "Laravel", "AI APIs", "MySQL", "Tailwind CSS"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Production Platform / AI-Powered",
      es: "Plataforma en Producción / AI-Powered"
    },
    screenshots: [],
    videoDemo: ""
  },
  {
    id: "sidip",
    title: {
      en: "SIDIP (Dominican Price Information System)",
      es: "SIDIP (Sistema Dominicano de Información de Precios)"
    },
    role: {
      en: "Full Stack Lead & Architect",
      es: "Líder Full Stack y Arquitecto"
    },
    description: {
      en: "National platform for real-time price monitoring, comparison, and shopping simulation for market transparency.",
      es: "Plataforma nacional de monitoreo, comparación de precios en tiempo real y simulación de compras para transparencia de mercado."
    },
    longDescription: {
      en: "Advanced price information system allowing citizens to compare costs of family groceries, medicines, and hardware across national establishments. Designed with high-performance architectures, geolocation, RESTful APIs, and analytical market monitoring engines.",
      es: "Sistema avanzado de información de precios que permite a los ciudadanos comparar costos de la canasta familiar, medicamentos y ferreterías en establecimientos nacionales. Diseñado con arquitecturas de alto rendimiento, geolocalización, APIs RESTful y motores analíticos para el monitoreo de mercados."
    },
    techStack: ["PHP 8.x", "Symfony / Laravel", "JavaScript", "jQuery", "MySQL", "Bootstrap / Tailwind", "Google Analytics / BI"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Active Institutional Platform / National Monitoring",
      es: "Plataforma Institucional Activa / Monitoreo Nacional"
    },
    screenshots: []
  },
  {
    id: "cooprocon",
    title: {
      en: "COOPROCON Financial Management System",
      es: "Sistema de Gestión Financiera COOPROCON"
    },
    role: {
      en: "Lead Architect & Developer",
      es: "Arquitecto Líder y Desarrollador"
    },
    description: {
      en: "Complex financial engine for a cooperative automating loan quota calculations, specialized payroll reporting, and financial auditing logic.",
      es: "Motor financiero complejo para una cooperativa que automatiza cálculos de cuotas de préstamos, reportes de nómina especializados y lógica de auditoría financiera."
    },
    longDescription: {
      en: "Designed a financial engine for a cooperative. Automated loan quota calculations, specialized payroll reporting (exportable to Excel with dynamic styles), and implemented dynamic highlighting logic for financial auditing based on monthly cut-off cycles.",
      es: "Diseño de un motor financiero para una cooperativa. Automatización de cálculos de cuotas de préstamos, reportes de nómina especializados (exportables a Excel con estilos dinámicos) y lógica de resaltado dinámico para auditoría financiera basada en ciclos de corte mensual."
    },
    techStack: ["PHP 8.x", "Laravel 10/11", "MySQL", "Tailwind CSS", "Maatwebsite Excel", "Carbon"],
    category: "Backend",
    featured: true,
    status: {
      en: "Institutional System / Case Study",
      es: "Sistema Institucional / Estudio de Caso"
    },
    screenshots: []
  },
  {
    id: "pac",
    title: {
      en: "PAC (Agile Assistance Platform)",
      es: "PAC (Plataforma Ágil de Asistencia)"
    },
    role: {
      en: "Backend Developer",
      es: "Desarrollador Backend"
    },
    description: {
      en: "Service-oriented architecture for incident management and claims processing built with Python and PostgreSQL.",
      es: "Arquitectura orientada a servicios para gestión de incidencias y procesamiento de reclamaciones construida con Python y PostgreSQL."
    },
    longDescription: {
      en: "Service-oriented architecture designed for incident management, claims processing, and citizen assistance integration. Highly relevant for high-reliability operational environments.",
      es: "Arquitectura orientada a servicios diseñada para la gestión de incidencias, procesamiento de reclamaciones e integración de asistencia ciudadana. Altamente relevante para entornos operativos de alta fiabilidad."
    },
    techStack: ["Python", "Django", "PostgreSQL", "REST APIs"],
    category: "Python",
    featured: true,
    status: {
      en: "Service Architecture / Institutional Legacy",
      es: "Arquitectura de Servicios / Legado Institucional"
    },
    screenshots: []
  },
  {
    id: "asset-management",
    title: {
      en: "Institutional Asset Management & Tracking System",
      es: "Sistema de Gestión y Rastreo de Activos Institucionales"
    },
    role: {
      en: "Lead Software Architect",
      es: "Arquitecto de Software Líder"
    },
    description: {
      en: "Web-based application to manage and track institutional assets across multiple departments with custom Event Subscribers.",
      es: "Aplicación web para gestionar y rastrear activos institucionales en múltiples departamentos mediante Event Subscribers personalizados."
    },
    longDescription: {
      en: "Developed a robust web-based application to track institutional assets ensuring full auditability of equipment movements. Implemented a custom Event Subscriber to automate asset location updates and historical Origin-Destination mapping.",
      es: "Desarrollo de una aplicación web robusta para rastrear activos institucionales garantizando total auditabilidad de movimientos de equipos. Implementación de un Event Subscriber personalizado para automatizar actualizaciones de ubicación y mapeo histórico de Origen-Destino."
    },
    techStack: ["PHP 8.2+", "Symfony 7", "Doctrine ORM", "EasyAdmin", "MySQL", "Twig", "Bootstrap 5", "Dompdf", "PhpSpreadsheet"],
    category: "Architecture",
    featured: true,
    status: {
      en: "Internal System / Symfony Enterprise",
      es: "Sistema Interno / Symfony Enterprise"
    },
    screenshots: []
  }
];