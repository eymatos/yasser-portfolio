import { PersonalInfo, Project, Experience, Recognition } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Esleidin Yasser Matos Lara",
  title: {
    en: "Technology Director & Enterprise Systems Architect",
    es: "Director de Tecnología y Arquitecto de Sistemas Empresariales"
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
    en: "Accomplished Technology Director and Enterprise Systems Engineer with over 18 years of experience spearheading digital transformation, enterprise resource planning (ERP) governance, and full-stack software engineering. Expert in modernizing mission-critical architectures, Ellucian Banner workflows, multi-tier payroll administration (Workday, Gusto), secure APIs, and AI-driven automation workflows.",
    es: "Director de Tecnología e Ingeniero de Sistemas Empresariales con más de 18 años de experiencia liderando la transformación digital, la gobernanza de planificación de recursos empresariales (ERP) y la ingeniería de software full-stack. Experto en modernizar arquitecturas críticas, flujos de Ellucian Banner, administración de nóminas multi-nivel (Workday, Gusto), APIs seguras y flujos de automatización con IA."
  },
  experienceYears: 18,
};

export const coreCompetencies = {
  en: [
    "Enterprise Systems & ERP (Ellucian Banner, Workday, Gusto, Multi-tier Payroll)",
    "Full-Stack Software Engineering (PHP/Laravel/Symfony, Python, FastAPI, Django)",
    "Advanced Data Architecture (PostgreSQL, MySQL, Database Tuning, ETL Workflows)",
    "Applied AI & Automation Engineering (LLMs, Cursor, Claude Code, Vibe Coding)",
    "Strategic Governance & International Summit Technology Coordination (FTC Washington, UN Geneva)"
  ],
  es: [
    "Sistemas Empresariales y ERP (Ellucian Banner, Workday, Gusto, Nóminas Multitanda)",
    "Ingeniería de Software Full-Stack (PHP/Laravel/Symfony, Python, FastAPI, Django)",
    "Arquitectura de Datos Avanzada (PostgreSQL, MySQL, Tuning, Flujos ETL)",
    "Ingeniería de IA Aplicada y Automatización (LLMs, Cursor, Claude Code, Vibe Coding)",
    "Gobernanza Estratégica y Coordinación Tecnológica en Cumbres Internacionales (FTC Washington, ONU Ginebra)"
  ]
};

export const experiences: Experience[] = [
  {
    id: "proconsumidor",
    company: "Instituto Nacional de Protección de los Derechos del Consumidor (ProConsumidor)",
    role: {
      en: "Technology Director / Senior PHP Developer",
      es: "Director de Tecnología / Desarrollador PHP Senior"
    },
    period: "2015 – Present",
    location: "Santo Domingo, DO / International Summits",
    description: {
      en: [
        "Direct institutional enterprise IT strategy, digital infrastructure, and core software solutions, leading a specialized cross-functional team of 9 technical experts (Full Stack, Frontend, Backend, DB Manager, DevOps, Networking, QA) to maintain 99.9% uptime across core services.",
        "Architected and deployed scalable full-stack applications and microservices using PHP (Symfony/Laravel) and Python, improving transaction throughput and system responsiveness by 40%.",
        "Managed enterprise ERP and institutional workflows, integrating principles from Ellucian Banner (Student, Finance, and HR/Payroll modules) to streamline administrative processes and multi-tier operational data.",
        "Managed high-availability relational databases (PostgreSQL, MySQL) and orchestrated cloud-native CI/CD pipelines on AWS, accelerating feature deployment cycles by 50% while upholding stringent security and reliability standards.",
        "Spearheaded AI-driven automation tools using LLMs and automated scripts to streamline high-volume records classification and financial reporting workflows, reducing manual processing time by over 60%.",
        "General Coordinator for the ICPEN Presidency technical team (2025-2026), leading IT governance and institutional systems deployment across global multilateral summits, including FTC Headquarters (Washington, DC), UN Palais des Nations (Geneva), and international forums in Argentina, Uruguay, Colombia, Mexico, and El Salvador."
      ],
      es: [
        "Dirijo la estrategia de TI empresarial institucional, la infraestructura digital y las soluciones de software principales, liderando un equipo técnico multidisciplinario de 9 expertos para mantener un 99.9% de disponibilidad en servicios críticos.",
        "Diseñé y desplegué aplicaciones full-stack escalables y microservicios utilizando PHP (Symfony/Laravel) y Python, mejorando el rendimiento de transacciones y la capacidad de respuesta del sistema en un 40%.",
        "Administré ERPs empresariales y flujos institucionales, integrando principios de Ellucian Banner (módulos de Finanzas, Estudiantes y RRHH/Nómina) para optimizar procesos administrativos y datos operativos multitanda.",
        "Administré bases de datos relacionales de alta disponibilidad (PostgreSQL, MySQL) y orquesté pipelines CI/CD nativos de la nube en AWS, acelerando los ciclos de despliegue en un 50% bajo estrictos estándares de seguridad.",
        "Lideré herramientas de automatización impulsadas por IA mediante LLMs y scripts para optimizar la clasificación de registros de alto volumen y flujos financieros, reduciendo el tiempo de procesamiento manual en más del 60%.",
        "Coordinador General del equipo técnico de la Presidencia de ICPEN (2025-2026), liderando la gobernanza de TI y despliegues tecnológicos en cumbres globales multilaterales, incluyendo la sede de la FTC (Washington, DC), el Palacio de las Naciones de la ONU (Ginebra), y foros internacionales en Argentina, Uruguay, Colombia, México y El Salvador."
      ]
    },
    skills: ["PHP 8.x", "Symfony", "Laravel", "Python", "Ellucian Banner", "Microservices", "Docker", "PostgreSQL", "MySQL", "AWS", "CI/CD", "AI Automation"]
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
        "Engineered and maintained high-traffic web applications, inventory management systems, and custom database integrations using PHP, JavaScript, MySQL, and Linux environments.",
        "Implemented secure data schemas and payment processing gateways ensuring compliance, data protection, and optimized user experience.",
        "Oversaw comprehensive business operations, multi-tier payroll administration, inventory management, and financial transaction processing, leveraging platforms like Gusto and Workday as lightweight administrative process automations.",
        "Engineered automated data reconciliation pipelines, eliminating repetitive administrative burdens and reducing transaction discrepancies by 35%.",
        "Managed operational budgets and led cross-functional staff, aligning operational standards with institutional fiscal goals."
      ],
      es: [
        "Diseñé y mantuve aplicaciones web de alto tráfico, sistemas de gestión de inventario e integraciones de bases de datos personalizadas utilizando PHP, JavaScript, MySQL y entornos Linux.",
        "Implementé esquemas de datos seguros y pasarelas de pago garantizando cumplimiento, protección de datos y una experiencia de usuario optimizada.",
        "Supervisé operaciones comerciales integrales, administración de nóminas multi-nivel, gestión de inventario y procesamiento de transacciones financieras, aprovechando plataformas como Gusto y Workday para automatizaciones administrativas ligeras.",
        "Diseñé pipelines automatizados de conciliación de datos, eliminando cargas administrativas repetitivas y reduciendo discrepancias de transacciones en un 35%.",
        "Administré presupuestos operativos y lideré personal multidisciplinario, alineando los estándares operativos con los objetivos fiscales institucionales."
      ]
    },
    skills: ["PHP", "JavaScript", "MySQL", "Linux Server Administration", "Gusto", "Workday", "Payroll Governance", "E-commerce", "Bootstrap"]
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
        "Directed institutional web platforms and content delivery systems leveraging PHP, HTML5, CSS3, and JavaScript, ensuring robust uptime and public accessibility.",
        "Ensured site stability and security by monitoring performance, identifying potential technical issues, and resolving incidents promptly.",
        "Developed procedures and standards for content management, standardizing updates and significantly reducing system downtime."
      ],
      es: [
        "Dirigí plataformas web institucionales y sistemas de entrega de contenido aprovechando PHP, HTML5, CSS3 y JavaScript, asegurando una alta disponibilidad y accesibilidad pública.",
        "Garanticé la estabilidad y seguridad del sitio mediante el monitoreo de rendimiento, identificación de problemas técnicos y resolución rápida de incidencias.",
        "Desarrollé procedimientos y estándares para la gestión de contenidos, estandarizando actualizaciones y reduciendo significativamente el tiempo de inactividad."
      ]
    },
    skills: ["PHP", "HTML5", "CSS3", "JavaScript", "Web Administration", "Content Management Systems"]
  }
];

export const recognitions: Recognition[] = [
  {
    id: "press-medismart-launch",
    title: {
      en: "Media Coverage: Launch of MediSmart RD (AI Clinical Platform)",
      es: "Cobertura de Prensa: Lanzamiento de MediSmart RD (Plataforma Clínica con IA)"
    },
    organization: {
      en: "Últimas Noticias Digital",
      es: "Últimas Noticias Digital"
    },
    date: "January 2026",
    location: "Santo Domingo, DO",
    description: {
      en: "Featured media coverage detailing the official launch of MediSmart RD, highlighting its advanced AI medical engine, personalized dosage calculation, and digital prescriptions.",
      es: "Cobertura mediática destacando el lanzamiento oficial de MediSmart RD, resaltando su motor médico de IA avanzado, cálculo de dosis personalizadas y recetas digitales."
    },
    image: "/press/medismart.jpg"
  },
  {
    id: "icpen-presentation",
    title: {
      en: "ICPEN SIDIP System Presentation",
      es: "Presentación del Sistema SIDIP en ICPEN"
    },
    organization: {
      en: "ICPEN Multilateral Summit",
      es: "Cumbre Multilateral ICPEN"
    },
    date: "2025 - 2026",
    location: "International Forums",
    description: {
      en: "Video presentation and technical briefing of the Dominican Price Information System (SIDIP) before international consumer protection delegations.",
      es: "Presentación en video e informe técnico del Sistema Dominicano de Información de Precios (SIDIP) ante delegaciones internacionales de protección al consumidor."
    },
    videoUrl: "/press/ICPEN SIDIP PRESENTATION.mp4"
  },
  {
    id: "icpen-presidency",
    title: {
      en: "ICPEN Presidency Reports & Coordination",
      es: "Informes de Presidencia y Coordinación ICPEN"
    },
    organization: {
      en: "ICPEN Executive Board",
      es: "Directiva Ejecutiva ICPEN"
    },
    date: "2025 - 2026",
    location: "Global Delegations",
    description: {
      en: "Official intervention delivering executive presidency reports and overseeing IT governance across global multilateral sessions.",
      es: "Intervención oficial entregando informes de la presidencia ejecutiva y supervisando la gobernanza de TI en sesiones multilaterales globales."
    },
    image: "/press/ICPEN.jpg"
  },
  {
    id: "onu-unctad-1",
    title: {
      en: "UNCTAD - UN Multilateral Participation (Session I)",
      es: "Participación Multilateral UNCTAD - ONU (Sesión I)"
    },
    organization: {
      en: "United Nations (UNCTAD)",
      es: "Organización de las Naciones Unidas (UNCTAD)"
    },
    date: "2025 - 2026",
    location: "Palais des Nations, Geneva",
    description: {
      en: "High-level institutional representation and technical collaboration at United Nations Conference on Trade and Development forums.",
      es: "Representación institucional de alto nivel y colaboración técnica en los foros de la Conferencia de las Naciones Unidas sobre Comercio y Desarrollo."
    },
    image: "/press/ONU.jpg"
  },
  {
    id: "onu-unctad-2",
    title: {
      en: "UNCTAD - UN Multilateral Participation (Session II)",
      es: "Participación Multilateral UNCTAD - ONU (Sesión II)"
    },
    organization: {
      en: "United Nations (UNCTAD)",
      es: "Organización de las Naciones Unidas (UNCTAD)"
    },
    date: "2025 - 2026",
    location: "Palais des Nations, Geneva",
    description: {
      en: "Continuation of multilateral engagements focusing on digital consumer empowerment, cross-border cooperation, and data governance standards.",
      es: "Continuidad de compromisos multilaterales enfocados en empoderamiento del consumidor digital, cooperación transfronteriza y estándares de gobernanza de datos."
    },
    image: "/press/ONU2.jpg"
  },
  {
    id: "press-cdn-sidip3",
    title: {
      en: "Press Conference: SIDIP 3.0 National Launch",
      es: "Rueda de Prensa: Lanzamiento Nacional SIDIP 3.0"
    },
    organization: {
      en: "CDN Media Coverage",
      es: "Cobertura de Medios CDN"
    },
    date: "2025",
    location: "Santo Domingo, DO",
    description: {
      en: "Media broadcast covering the official release of SIDIP 3.0, detailing real-time market price monitoring architecture for citizens.",
      es: "Transmisión de medios cubriendo el lanzamiento oficial de SIDIP 3.0, detallando la arquitectura de monitoreo de precios de mercado en tiempo real."
    },
    image: "/press/CDN.jpg"
  },
  {
    id: "press-hoy-app",
    title: {
      en: "Periódico Hoy Interview: New App Launch",
      es: "Entrevista Periódico Hoy: Lanzamiento de Nueva App"
    },
    organization: {
      en: "Periódico Hoy",
      es: "Periódico Hoy"
    },
    date: "2024 - 2025",
    location: "Dominican Republic",
    description: {
      en: "Featured print and digital interview discussing technological modernization, mobile solutions, and citizen service efficiency.",
      es: "Entrevista impresa y digital destacada discutiendo la modernización tecnológica, soluciones móviles y la eficiencia en el servicio al ciudadano."
    },
    image: "/press/Periodico Hoy.jpg"
  },
  {
    id: "press-rueda-pac",
    title: {
      en: "Press Conference: Agile Assistance Platform (PAC)",
      es: "Rueda de Prensa: Plataforma Ágil de Asistencia (PAC)"
    },
    organization: {
      en: "National Media Press Briefing",
      es: "Rueda de Prensa a Medios Nacionales"
    },
    date: "2024 - 2025",
    location: "Santo Domingo, DO",
    description: {
      en: "Video broadcast and press conference introducing the automated claims and incident response architecture for consumer rights.",
      es: "Transmisión en video y rueda de prensa presentando la arquitectura automatizada de reclamaciones y respuesta a incidencias para los derechos del consumidor."
    },
    videoUrl: "/press/Rueda de prensa.mp4"
  },
  {
    id: "press-sin-coverage",
    title: {
      en: "Noticias SIN Broadcast Coverage",
      es: "Cobertura de Emisión de Noticias SIN"
    },
    organization: {
      en: "Noticias SIN",
      es: "Noticias SIN"
    },
    date: "2024 - 2025",
    location: "Dominican Republic",
    description: {
      en: "Prime-time television news coverage highlighting the implementation and social impact of institutional software platforms.",
      es: "Cobertura de noticias en televisión estelar destacando la implementación y el impacto social de las plataformas de software institucional."
    },
    image: "/press/SIN.jpg"
  },
  {
    id: "institutional-bulletin",
    title: {
      en: "Institutional Bulletin Feature: Pro Consumidor Leadership",
      es: "Publicación en Boletin Institucional: Liderazgo en Pro Consumidor"
    },
    organization: {
      en: "Pro Consumidor Official Publication",
      es: "Publicación Oficial Pro Consumidor"
    },
    date: "2025",
    location: "Santo Domingo, DO",
    description: {
      en: "Special institutional magazine publication detailing technical management, digital transformation milestones, and departmental excellence.",
      es: "Publicación especial de revista institucional detallando la gestión técnica, hitos de transformación digital y la excelencia departamental."
    },
    image: "/press/Boletin Institucional.jpeg"
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