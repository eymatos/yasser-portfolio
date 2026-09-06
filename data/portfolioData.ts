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
    en: "Senior Computer Systems Engineer with over 18 years of technical experience, specializing in the PHP ecosystem (Symfony/Laravel), Fullstack architecture, and high-availability enterprise applications. Expert in designing scalable solutions using Domain-Driven Design (DDD), CQRS, Microservices, and proactive IT service management.",
    es: "Ingeniero en Sistemas de Computación Senior con más de 18 años de experiencia técnica, especializado en el ecosistema PHP (Symfony/Laravel), arquitectura Fullstack y aplicaciones empresariales de alta disponibilidad. Experto en diseñar soluciones escalables utilizando Domain-Driven Design (DDD), CQRS, Microservicios y gestión proactiva de servicios de TI."
  },
  experienceYears: 18,
};

export const coreCompetencies = {
  en: [
    "Enterprise Software Architecture (DDD, CQRS, Microservices)",
    "Incident Management, Escalation & Proactive Error Detection",
    "IT Service Management (ITIL framework & SOP Development)",
    "High-Availability Infrastructure & System Monitoring (Nagios, Zabbix)",
    "Full-Stack Web Development & Modern API Integration"
  ],
  es: [
    "Arquitectura de Software Empresarial (DDD, CQRS, Microservicios)",
    "Gestión de Incidentes, Escalamiento y Detección Proactiva de Errores",
    "Gestión de Servicios de TI (Marco ITIL y Desarrollo de SOPs)",
    "Infraestructura de Alta Disponibilidad y Monitoreo (Nagios, Zabbix)",
    "Desarrollo Web Full-Stack e Integración de APIs Modernas"
  ]
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
        "Led the design, development, and deployment of scalable, high-availability institutional applications using PHP (Symfony components & Laravel), Python, and modern web technologies, ensuring data integrity and system performance.",
        "Transitioned legacy monolithic systems into a modern Microservices architecture with RESTful APIs, facilitating the integration of high-impact platforms like SIDIP and PAC.",
        "Standardized development and production environments using Docker, MySQL, PostgreSQL, and automated CI/CD pipelines to guarantee 24/7 operational continuity.",
        "Managed advanced relational databases and implemented proactive system monitoring and incident management protocols, optimizing IT service availability."
      ],
      es: [
        "Lideré el diseño, desarrollo y despliegue de aplicaciones institucionales escalables de alta disponibilidad utilizando PHP (componentes Symfony y Laravel), Python y tecnologías web modernas, garantizando la integridad de datos y el rendimiento del sistema.",
        "Transicioné sistemas monolíticos heredados hacia una arquitectura moderna de microservicios con APIs RESTful, facilitando la integración de plataformas de alto impacto como SIDIP y PAC.",
        "Estandaricé los entornos de desarrollo y producción utilizando Docker, MySQL, PostgreSQL y pipelines CI/CD automatizados para garantizar la continuidad operativa 24/7.",
        "Administré bases de datos relacionales avanzadas e implementé protocolos de monitoreo proactivo del sistema y gestión de incidentes, optimizando la disponibilidad del servicio de TI."
      ]
    },
    skills: ["PHP 8.x", "Symfony", "Laravel", "Python", "Microservices", "Docker", "MySQL", "PostgreSQL", "CI/CD", "AWS"]
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
        "Developed and managed e-commerce platforms and custom inventory systems using PHP, JavaScript, and MySQL, aligning with high-volume commercial needs.",
        "Integrated third-party payment gateways, APIs, and optimized User Experience (UX) alongside robust backend database management.",
        "Managed Linux servers, database performance, and technical troubleshooting for high-traffic commercial environments."
      ],
      es: [
        "Desarrollé y administré plataformas de comercio electrónico y sistemas de inventario personalizados utilizando PHP, JavaScript y MySQL, adaptados a necesidades comerciales de alto volumen.",
        "Integré pasarelas de pago y APIs de terceros, optimizando la Experiencia de Usuario (UX) junto con una gestión robusta de bases de datos backend.",
        "Gestioné servidores Linux, el rendimiento de bases de datos y la resolución de incidencias técnicas para entornos comerciales de alto tráfico."
      ]
    },
    skills: ["PHP", "JavaScript", "MySQL", "Linux Server Administration", "E-commerce", "Bootstrap"]
  },
  {
    id: "first-lady",
    company: "First Lady's Office (Despacho de la Primera Dama)",
    role: {
      en: "Web Master",
      es: "Web Master"
    },
    period: "June 2006 – February 2009",
    location: "Santo Domingo, DO",
    description: {
      en: [
        "Managed the institutional portal, including daily news and event publication, media editing, and web updates to support public communications.",
        "Ensured site stability and security by monitoring performance, identifying potential technical issues, and resolving incidents promptly.",
        "Developed procedures and standards for content management, standardizing updates and significantly reducing system downtime."
      ],
      es: [
        "Administré el portal institucional, incluyendo la publicación diaria de noticias y eventos, edición de contenidos multimedia y actualizaciones web para respaldar las comunicaciones públicas.",
        "Garanticé la estabilidad y seguridad del sitio mediante el monitoreo de rendimiento, identificación de posibles problemas técnicos y resolución rápida de incidencias.",
        "Desarrollé procedimientos y estándares para la gestión de contenidos, estandarizando las actualizaciones y reduciendo significativamente el tiempo de inactividad del sistema."
      ]
    },
    skills: ["PHP", "HTML5", "CSS3", "JavaScript", "Web Administration", "Content Management Systems"]
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
      en: "AI-driven system designed to automate legal research and document processing. Impact: Reduces manual file review time by over 70%, empowering legal professionals to cross-reference regulations and precedents instantly through vector-indexed LLMs.",
      es: "Sistema impulsado por IA diseñado para automatizar la investigación jurídica y el procesamiento de documentos. Impacto: Reduce el tiempo de revisión manual de expedientes en más de un 70%, permitiendo a los profesionales legales contrastar normativas y precedentes de manera instantánea mediante modelos vectoriales."
    },
    techStack: ["Python", "JavaScript", "OpenAI / LLM APIs", "Vector Indexing", "Tailwind CSS"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Conceptual AI Prototype / R&D",
      es: "Prototipo Conceptual de IA / I+D"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/jurisai/dashboard.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/jurisai/hero.png"
    ],
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
      en: "Peer-to-peer tutoring marketplace designed for on-demand educational booking. Impact: Streamlines educator-student matching in real-time, eliminating friction in private lesson scheduling and expanding revenue opportunities for independent tutors.",
      es: "Marketplace de tutorías entre pares diseñado para reservas educativas bajo demanda. Impacto: Optimiza el emparejamiento entre profesores y alumnos en tiempo real, eliminando la fricción en la programación de clases particulares y ampliando las oportunidades de ingresos para tutores independientes."
    },
    techStack: ["PHP", "JavaScript", "Firebase", "Bootstrap", "APIs"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "MVP / Completed Project",
      es: "MVP / Proyecto Concluido"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/asktuto/dashboard.png"
    ],
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
      en: "Specialized talent acquisition portal. Impact: Accelerated the screening and evaluation lifecycle for human resources departments, cutting candidate filtering time and securing a structured, transparent hiring pipeline.",
      es: "Portal especializado en adquisición de talento. Impacto: Aceleró el ciclo de filtrado y evaluación para departamentos de recursos humanos, reduciendo el tiempo de selección de candidatos y asegurando un flujo de contratación estructurado y transparente."
    },
    techStack: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Production System / Recruitment Platform",
      es: "Sistema en Producción / Plataforma de Reclutamiento"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/dashboard.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/hero.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/hero2.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/hero3.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/hero4.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/hero5.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/hero6.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/myp-contrataciones/hero7.png"
    ],
    videoDemo: ""
  },
  {
    id: "medismart",
    title: {
      en: "MediSmart RD (Clinical SaaS & AI Diagnostic Platform)",
      es: "MediSmart RD (SaaS Clínico y Plataforma de Diagnóstico con IA)"
    },
    role: {
      en: "Lead Full Stack & AI Architect",
      es: "Arquitecto Líder Full Stack y de IA"
    },
    description: {
      en: "Comprehensive SaaS platform for clinical management, medical billing, and AI-assisted diagnostic support designed for healthcare professionals and clinics.",
      es: "Plataforma SaaS integral de gestión clínica, facturación médica y soporte diagnóstico asistido por IA diseñada para facultativos y centros de salud."
    },
    longDescription: {
      en: "Multi-tenant clinical SaaS platform powered by Vue.js 3, Node.js, and FastAPI. Impact: Empowers medical practitioners with AI-driven diagnostic alerts and automated clinical triage, reducing administrative bottlenecks and improving patient safety through digitized electronic health records and instant digital prescriptions.",
      es: "Plataforma SaaS clínica multi-tenant impulsada por Vue.js 3, Node.js y FastAPI. Impacto: Empodera a los facultativos médicos con alertas diagnósticas impulsadas por IA y triaje clínico automatizado, reduciendo cuellos de botella administrativos y mejorando la seguridad del paciente a través de expedientes electrónicos digitalizados y recetas instantáneas."
    },
    techStack: ["Vue.js 3", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS", "OpenAI / Groq API", "PayPal SDK", "Chart.js", "jsPDF"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Production SaaS / AI-Powered",
      es: "SaaS en Producción / AI-Powered"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/medismart/dashboard.png"
    ],
    videoDemo: "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/medismart/demo.mp4"
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
      en: "National price intelligence platform serving millions of citizens. Impact: Drastically reduced market information asymmetry by allowing real-time comparison of grocery, medication, and hardware prices across national establishments, directly supporting consumer rights and financial decision-making nationwide.",
      es: "Plataforma nacional de inteligencia de precios al servicio de millones de ciudadanos. Impacto: Redujo drásticamente la asimetría de información en el mercado al permitir la comparación en tiempo real de precios de la canasta familiar, medicamentos y ferreterías a nivel nacional, respaldando directamente los derechos del consumidor y la toma de decisiones financieras."
    },
    techStack: ["PHP 8.x", "Symfony / Laravel", "JavaScript", "jQuery", "MySQL", "Bootstrap / Tailwind", "Google Analytics / BI"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Active Institutional Platform / National Monitoring",
      es: "Plataforma Institucional Activa / Monitoreo Nacional"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/sidip/dashboard.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/sidip/hero.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/sidip/hero2.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/sidip/hero3.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/sidip/hero4.png"
    ],
    videoDemo: ""
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
      en: "Enterprise financial core designed for cooperative asset management. Impact: Automated complex loan quota computations and payroll deductions, eliminating human error in monthly financial cut-offs and accelerating institutional audit reporting cycles.",
      es: "Núcleo financiero empresarial diseñado para la gestión de activos de cooperativas. Impacto: Automatizó cálculos complejos de cuotas de préstamos y deducciones de nómina, eliminando el error humano en los cortes financieros mensuales y acelerando los ciclos de informes de auditoría institucional."
    },
    techStack: ["PHP 8.x", "Laravel 10/11", "MySQL", "Tailwind CSS", "Maatwebsite Excel", "Carbon"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Institutional System / Case Study",
      es: "Sistema Institucional / Estudio de Caso"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/cooprocon/dashboard.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/cooprocon/hero.png"
    ],
    videoDemo: ""
  },
  {
    id: "pac",
    title: {
      en: "PAC (Agile Assistance Platform)",
      es: "PAC (Plataforma Ágil de Asistencia)"
    },
    role: {
      en: "Fullstack Developer",
      es: "Desarrollador Fullstack"
    },
    description: {
      en: "Service-oriented architecture for incident management and claims processing built with Python and PostgreSQL.",
      es: "Arquitectura orientada a servicios para gestión de incidencias y procesamiento de reclamaciones construida con Python y PostgreSQL."
    },
    longDescription: {
      en: "High-reliability service architecture for citizen claims and incident response. Impact: Optimized institutional responsiveness by centralizing complaint tracking and resolution metrics, ensuring strict compliance with service level agreements (SLAs).",
      es: "Arquitectura de servicios de alta confiabilidad para reclamaciones ciudadanas y respuesta a incidencias. Impacto: Optimizó la capacidad de respuesta institucional al centralizar el seguimiento de quejas y las métricas de resolución, garantizando el cumplimiento estricto de los acuerdos de nivel de servicio (SLA)."
    },
    techStack: ["Python", "Django", "PostgreSQL", "REST APIs"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Service Architecture / Institutional Legacy",
      es: "Arquitectura de Servicios / Legado Institucional"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/pac/hero.png"
    ],
    videoDemo: ""
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
      en: "Enterprise web application built with Symfony 7 and EasyAdmin to manage, track, and audit institutional assets across multiple departments with automated event-driven workflows.",
      es: "Aplicación web empresarial desarrollada con Symfony 7 y EasyAdmin para gestionar, rastrear y auditar activos institucionales en múltiples departamentos mediante flujos automatizados orientados a eventos."
    },
    longDescription: {
      en: "Enterprise asset tracking and inventory control platform. Impact: Eliminated equipment loss and audit discrepancies across multiple departments by implementing event-driven tracking, automated origin-destination mapping, and generating professional landscape audit reports.",
      es: "Plataforma empresarial de control de inventario y seguimiento de activos. Impacto: Eliminó la pérdida de equipos y las discrepancias de auditoría en múltiples departamentos al implementar seguimiento impulsado por eventos, mapeo automatizado de origen-destino y generación de reportes profesionales de auditoría apaisados."
    },
    techStack: ["PHP 8.2+", "Symfony 7", "EasyAdmin", "Doctrine ORM", "MySQL", "Twig", "Bootstrap 5", "Dompdf", "PhpSpreadsheet", "Chart.js"],
    category: "Fullstack",
    featured: true,
    status: {
      en: "Internal System / Symfony Enterprise",
      es: "Sistema Interno / Symfony Enterprise"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/asset-management/dashboard.png"
    ],
    videoDemo: ""
  },
  {
    id: "del-castillo-y-asoc",
    title: {
      en: "Del Castillo & Assoc. Corporate Portal",
      es: "Portal Corporativo Del Castillo & Assoc."
    },
    role: {
      en: "Lead Web Architect",
      es: "Arquitecto Web Líder"
    },
    description: {
      en: "Corporate web portal and institutional showcase built on WordPress, tailored for professional legal and business advisory services.",
      es: "Portal web corporativo y escaparate institucional construido en WordPress, adaptado para servicios profesionales de asesoría legal y de negocios."
    },
    longDescription: {
      en: "Corporate web presence and digital showcase for professional legal services. Impact: Strengthened the firm's digital authority, providing a secure, multilingual client acquisition channel aligned with high corporate advisory standards.",
      es: "Presencia web corporativa y escaparate digital para servicios legales profesionales. Impacto: Fortaleció la autoridad digital de la firma, proporcionando un canal de captación de clientes seguro y multilingüe alineado con altos estándares de asesoría corporativa."
    },
    techStack: ["WordPress", "PHP", "JavaScript", "MySQL", "Tailwind / Bootstrap"],
    category: "Architecture",
    featured: true,
    status: {
      en: "Active Corporate Website",
      es: "Sitio Web Corporativo Activo"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/del-castillo-y-asoc/dashboard.png",
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/del-castillo-y-asoc/hero.png"
    ],
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
      en: "Institutional portal and membership management platform. Impact: Streamlined member registration and the dissemination of educational initiatives, enhancing organizational transparency and community outreach.",
      es: "Portal institucional y plataforma de gestión de membresías. Impacto: Agilizó el registro de miembros y la divulgación de iniciativas educativas, mejorando la transparencia organizacional y el alcance comunitario."
    },
    techStack: ["WordPress", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: "Architecture",
    featured: true,
    status: {
      en: "Active Portal / Needs UI Update",
      es: "Portal Activo / Requiere Actualización de UI"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/gisef/dashboard.png"
    ],
    videoDemo: ""
  },
  {
    id: "cronistas-sociales",
    title: {
      en: "Cronistas Sociales Digital Platform",
      es: "Plataforma Digital Cronistas Sociales"
    },
    role: {
      en: "Lead WordPress Architect & Developer",
      es: "Arquitecto y Desarrollador WordPress Líder"
    },
    description: {
      en: "Professional digital media portal built on WordPress, optimized for high-traffic content publishing, media management, and social news aggregation.",
      es: "Portal de medios digitales profesional construido en WordPress, optimizado para la publicación de contenido de alto tráfico, gestión de medios y agregación de noticias sociales."
    },
    longDescription: {
      en: "High-traffic digital media publishing portal. Impact: Facilitated fast-paced editorial workflows and news aggregation for a specialized media association, ensuring high availability and optimized content delivery.",
      es: "Portal de publicación de medios digitales de alto tráfico. Impacto: Facilitó flujos de trabajo editoriales rápidos y agregación de noticias para una asociación de medios especializada, asegurando alta disponibilidad y entrega de contenido optimizada."
    },
    techStack: ["WordPress", "PHP", "JavaScript", "MySQL", "CSS3"],
    category: "Architecture",
    featured: true,
    status: {
      en: "Archived Media Portal",
      es: "Portal de Medios Archivo"
    },
    screenshots: [
      "https://raw.githubusercontent.com/eymatos/yasser-portfolio/main/public/projects/cronistas-sociales/dashboard.jpg"
    ],
    videoDemo: ""
  }
];