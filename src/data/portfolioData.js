export const portfolioData = {
  personal: {
    name: "SUBIN S R",
    title: "Full Stack Software Engineer",
    tagline: "I build accessible, pixel-perfect, and resilient digital experiences for the modern web.",
    location: "Tamil Nadu, India",
    availability: "Available for freelance & full-time roles",
    email: "subinsr812@gmail.com",
    github: "https://github.com/Subin-2005",
    linkedin: "http://www.linkedin.com/in/subin07",
    resumeUrl: "\resume1-Subin.pdf",
    avatar: "/avatar.svg",
  },

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ],

  about: {
    paragraphs: [
      "Hi, I’m Subin S.R., a Computer Science and Engineering student passionate about software development, artificial intelligence, and building real-world applications. I enjoy turning ideas into practical and user-friendly solutions. I have experience working with Python, Django, Django REST Framework, React, MySQL, and REST APIs, and I’m continuously improving my problem-solving skills through coding practice and projects. I have worked on projects such as a Gym Management System and an AI Interview Simulator, where I explored areas including web development, authentication, APIs, AI-based analysis, and interactive user interfaces. I’m currently focused on strengthening my Data Structures & Algorithms, Python, full-stack development, AI technologies, and software testing skills while preparing myself for opportunities in the software industry. I believe in learning by building, solving problems consistently, and improving a little every day. My goal is to become a skilled software developer and create technology that solves meaningful real-world problems."
    ],

    highlights: [
      { label: "Projects Completed", value: "20+" },
      { label: "Core Technologies", value: "React • Django • RESTAPI" },
      { label: "Code Quality", value: "Clean & Accessible" },
    ],
  },

  certifications: [
    {
      title: "10th Certificate",
      issuer: "State Board",
      issuerUrl: "",
      period: "2020",
      credentialId: "CERT-10TH-2020",
      credentialUrl: "",
      image: "/certificates/10th.jpeg",
      description:
        "Completed the 10th standard with a strong academic foundation in core subjects including mathematics, science, and English.",
      // technologies: ["Mathematics", "Science", "English", "Academic Excellence"],
    },
    {
      title: "12th Certificate",
      issuer: "State Board",
      issuerUrl: "",
      period: "2022",
      credentialId: "CERT-12TH-2022",
      credentialUrl: "",
      image: "/certificates/12th.jpeg",
      description:
        "Completed the 12th standard with focus on fundamentals in science, mathematics, and analytical thinking that supported my technical career path.",
      // technologies: ["Physics", "Chemistry", "Mathematics", "Analytical Skills"],
    },
    {
      title: "Python Full Stack Development",
      issuer: "Full Stack Training Program",
      issuerUrl: "",
      period: "2024",
      credentialId: "CERT-PY-FSD-2024",
      credentialUrl: "",
      image: "/certificates/python-full-stack-development.svg",
      description:
        "Built practical skills in Python, Django, REST APIs, database integration, and full-stack application development through hands-on project-based learning.",
      technologies: ["Python", "Django", "REST APIs", "MySQL", "Full Stack Development"],
    },
  ],

  projects: [
    {
      title: "NovaCloud — Cloud Infrastructure Monitor",
      subtitle: "Full-Stack Observability Platform",
      description:
        "A real-time distributed telemetry and resource monitoring platform for microservices. Features interactive metric graphs, automated latency alerting, log aggregations, and webhook notifications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      stats: "⭐ 250+ GitHub Stars • 1.2k Weekly Users",
    },
    {
      title: "PulseSync — Real-Time Collaborative Workspace",
      subtitle: "Team Productivity Suite",
      description:
        "Collaborative markdown workspace and kanban canvas enabling distributed teams to brainstorm, draft documentation, and track sprint items with low-latency CRDT state synchronization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      stats: "⚡ Sub-50ms Sync Latency",
    },
    {
      title: "AuraUI — Accessible Design System",
      subtitle: "Open Source Component Library",
      description:
        "Comprehensive, WCAG AAA compliant React design system and icon library featuring dark mode tokens, keyboard navigation primitives, and zero-runtime CSS modules.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "TypeScript", "Storybook", "CSS Modules", "NPM Package", "Rollup"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      stats: "📦 15k+ NPM Downloads",
    },
    {
      title: "EchoPay — Crypto & Fiat Gateway",
      subtitle: "Seamless Checkout Architecture",
      description:
        "Modern developer-first payment checkout widget integrating multi-currency conversions, instant invoice generation, cryptographic receipt verification, and webhooks.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "Express", "Stripe API", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      stats: "🔒 End-to-End Encrypted",
    },
  ],

  skills: [
    {
      category: "Full stack Development",
      items: [
        { name: "Python", level: "Advanced" },
        { name: "Django", level: "Advanced" },
        { name: "MySQL", level: "Expert" },
        { name: "React", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Expert" },
        { name: "Web Performance & SEO", level: "Advanced" },
      ],
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Developer Workspace & Multi-Monitor Setup",
      category: "Tech & Workspace",
      date: "2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      caption: "My primary workstation configured for high-productivity full-stack development, testing, and debugging.",
      tags: ["Workspace", "Hardware", "Productivity"],
    },
    {
      id: "gal-2",
      title: "Hackathon Sprint & Team Collaboration",
      category: "Hackathons & Events",
      date: "2024",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      caption: "Brainstorming architecture and rapid prototyping during a 24-hour campus hackathon.",
      tags: ["Hackathon", "Collaboration", "Rapid Prototyping"],
    },
    {
      id: "gal-3",
      title: "AI Interview Simulator Architecture Demo",
      category: "Projects & Demos",
      date: "2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      caption: "Real-time AI analysis dashboard evaluating mock interview performance and code solutions.",
      tags: ["AI", "React", "Django REST"],
    },
    {
      id: "gal-4",
      title: "Gym Management System Interface",
      category: "Projects & Demos",
      date: "2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      caption: "Interactive analytics dashboard for gym membership tracking, subscriptions, and revenue reports.",
      tags: ["Django", "MySQL", "UI/UX"],
    },
    {
      id: "gal-5",
      title: "Python Full-Stack Certification Milestone",
      category: "Milestones",
      date: "2024",
      image: "/certificates/12th.jpeg",
      caption: "Demonstrating mastery in Python, Django REST frameworks, and full-stack software architecture.",
      tags: ["Certification", "Python", "Full Stack"],
    },
    {
      id: "gal-6",
      title: "Code Review & Tech Discussion Session",
      category: "Tech & Workspace",
      date: "2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      caption: "Collaborating with peers on clean code practices, algorithm optimizations, and API design.",
      tags: ["Code Review", "Clean Code", "Engineering"],
    },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/Subin-2005", icon: "github" },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/subin07", icon: "linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/itz_subin_360?igsi=MTQzaTUxZHdmOWZtbw==", icon: "instagram" },
    { name: "Email", url: "mailto:subinsr812@gmail.com", icon: "mail" },
  ],
};
