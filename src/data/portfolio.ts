// ============================================
// PORTFOLIO DATA - Easy to update resume content
// ============================================

export const PROFILE = {
    name: 'YUSUF MINHAS',
    title: 'Technical Support Engineer | Digital Operations & Platform Management | Incident Resolution (ServiceNow/Jira) | Shopify',
    email: 'y.minhas@hotmail.com',
    location: 'London, United Kingdom',
    website: 'yminhas.com',
    linkedin: '/yusufminhas',
    coordinates: 'LAT: 51.5074° N / LON: 0.1278° W',
    profileImage: '/images/profile-bw.jpg',
    profileImageHover: '/images/profile-color.jpg',
    about: 'Engineer by training. Designer by passion. Leveraging a background in DevOps and AWS architecture to build structured, resilient web experiences. Formerly supporting global infrastructure at IBM ; now optimizing UI/UX and digital operations in the e-commerce space.',
};

export const TOOLKIT = {
    languages: ['Python', 'JavaScript', 'SQL', 'Bash', 'PowerShell'],
    technologies: ['AWS', 'Git', 'React', 'Jenkins', 'MySQL', 'Office 365', 'VMWare'],
    projectManagement: ['Jira', 'ServiceNow', 'Confluence'],
    design: ['Figma', 'Typography', 'Grid Systems', 'Tailwind'],
};

export const LANGUAGES = [
    { name: 'English', level: 'Native' },

];

export const PROJECTS = [
    {
        title: 'GHOST MANAGER',
        category: 'SaaS / Full Stack',
        year: '2026',
        description:
            'A modern, high-performance subscription management SaaS to track recurring expenses, manage budgets, and avoid "ghost" subscriptions.',
        techStack: ['Next.js', 'Tailwind', 'Prisma', 'Supabase'],
        imageSrc: '/images/ghost-manager.png',
        imagePosition: 'left' as const,
        liveUrl: 'https://ghostfinance.netlify.app/',
        repoUrl: 'https://github.com/ysf117/GhostManager',
    },
    {
        title: 'E-COMMERCE OPTIMIZATION',
        category: 'Performance',
        year: '2023',
        description:
            'Reduced global load times by 40% through infrastructure tuning and UX refactoring. Implemented edge caching and optimized React rendering cycles.',
        techStack: ['Next.js', 'Redis'],
        imageSrc: '/images/project-1.jpg',
        imagePosition: 'left' as const,
    },
    {
        title: 'CLOUD ARCHITECTURE',
        category: 'Infrastructure',
        year: '2022',
        description:
            'Automated multi-region AWS deployments using Terraform and GitHub Actions. Designed a self-healing cluster for high availability.',
        techStack: ['Terraform', 'AWS'],
        imageSrc: '/images/project-2.jpg',
        imagePosition: 'left' as const,
    },
    {
        title: 'AI INTEGRATION',
        category: 'Machine Learning',
        year: '2024',
        description:
            'Integrated OpenAI APIs into existing customer service workflows, reducing response times by 60%. Built custom fine-tuned models for domain-specific queries.',
        techStack: ['Python', 'OpenAI', 'FastAPI'],
        imageSrc: '/images/project-3.jpg',
        imagePosition: 'left' as const,
    },
    {
        title: 'DEVOPS PIPELINE',
        category: 'Automation',
        year: '2023',
        description:
            'Designed and implemented CI/CD pipelines using GitHub Actions and Jenkins. Achieved 99.9% deployment success rate with automated rollback capabilities.',
        techStack: ['Jenkins', 'Docker', 'Kubernetes'],
        imageSrc: '/images/project-4.jpg',
        imagePosition: 'left' as const,
    },
    {
        title: 'SYSTEM MIGRATION',
        category: 'Infrastructure',
        year: '2024',
        description:
            'Led migration of legacy on-premise systems to AWS cloud infrastructure. Reduced operational costs by 45% while improving system reliability.',
        techStack: ['AWS', 'Terraform', 'Python'],
        imageSrc: '/images/project-5.jpg',
        imagePosition: 'left' as const,
    },
];

export const EXPERIENCE = [
    {
        yearRange: 'Mar 2025 — Present',
        role: 'Digital Operations & Technical Support Specialist',
        company: 'Gaijin Gadgets',
        description:
            'Multifaceted Digital Operations Specialist streamlining Shopify ecosystems, technical support, and UX design to optimize the customer journey from checkout to fulfillment.',
        isFirst: true,
        highlights: [
            'Shopify Management: Managed the CMS backend to ensure 100% accuracy of product metadata, pricing logic, and site content, optimizing the storefront for a seamless user experience.',
            'Technical Support: Acted as the primary point of contact for multi-channel inquiries (email/social), diagnosing application-level issues and resolving payment gateway or fulfilment discrepancies.',
            'Process Improvement: Analysed recurring customer friction points to implement website updates and FAQ resources that streamlined the checkout journey and reduced repeat support tickets.',
            'Digital Assets: Designed and deployed site-wide promotional banners and communications to maintain brand consistency and optimize UI/UX.',
            'Event Operations: Represented the brand at high-traffic events (e.g., Comic Con), managing live sales and resolving hardware-level POS issues under pressure to ensure zero downtime.',
        ],
    },
    {
        yearRange: 'Jun 2022 — Mar 2025',
        role: 'Senior Tech+ Analyst',
        company: 'GRAYCE',
        description:
            '3 years at an international consultancy specializing in IT support, working with some of the largest global tech companies.',
        isFirst: false,
        highlightsTitle: 'IBM Assignment Highlights',
        highlights: [
            'Delivered IT support across production services, providing early life support to ensure smooth onboarding of new systems and minimizing post-deployment issues.',
            'Managed day-to-day incident resolution in a fast-paced Agile environment, successfully resolving high-priority incidents to maintain system availability and minimize business disruption.',
            'Monitored services with Kibana, analyzing server logs to identify root causes and reducing average resolution time by 20%.',
            'Utilised ServiceNow, JIRA, and Confluence to document, track, and resolve incidents, improving collaboration, workflow transparency, and traceability.',
            'Applied Bash scripting and command-line tools to automate fixes, cutting manual intervention time by 25%.',
            'Handled 150+ tickets daily and over 200 ServiceNow tickets monthly, achieving 95–98% SLA compliance and exceeding KPIs.',
            'Analysed service performance metrics, presenting insights to senior leadership that drove reliability improvements and reduced repeat incidents.',
            'Acted as primary escalation point for global stakeholders, bridging communication between technical and non-technical teams to reduce resolution times and strengthen client trust.',
            'Collaborated cross-functionally to align technical actions with business goals, contributing to higher client satisfaction scores.',
            'Designed and deployed automated workflows for recurring incidents, boosting team productivity and reducing resolution times.',
            'Delivered peer training and knowledge transfer sessions, improving onboarding speed and enhancing junior engineers\' technical capabilities.',
        ],
    },
];

export interface EducationItem {
    yearRange: string;
    degree: string;
    institution: string;
    focus?: string;
    isHighlighted: boolean;
}

export const EDUCATION: EducationItem[] = [
    {
        yearRange: '2018 — 2021',
        degree: 'BSC. COMPUTER SCIENCE',
        institution: 'University of West London',
        isHighlighted: false,
    },
    {
        yearRange: '2014 — 2017',
        degree: 'A-Levels',
        institution: 'Alperton Sixth Form',
        isHighlighted: false,
    },
];

export const CERTIFICATIONS = [
    {
        icon: 'sprint',
        title: 'Agile PM Foundation',
        issuer: 'APMG International',
    },
    {
        icon: 'cloud_done',
        title: 'AWS Solutions Architect',
        issuer: 'In Progress',
    },
    {
        icon: 'psychology',
        title: 'AWS AI Practitioner',
        issuer: 'In Progress',
    },
];

export const NAV_ITEMS = [
    { icon: 'home', label: 'Intro', href: '#home', sectionId: 'home' },
    { icon: 'grid_view', label: 'Projects', href: '#work', sectionId: 'work' },
    { icon: 'history', label: 'Experience', href: '#experience', sectionId: 'experience' },
    { icon: 'school', label: 'Education', href: '#education', sectionId: 'education' },
    { icon: 'verified', label: 'Certifications', href: '#certifications', sectionId: 'certifications' },
    { icon: 'mail', label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const CONTACT_ROWS = [
    { label: 'Email', value: 'y.minhas@hotmail.com', href: 'mailto:y.minhas@hotmail.com' },
    { label: 'Website', value: 'yminhas.com', href: 'https://yminhas.com' },
    { label: 'LinkedIn', value: '/yusufminhas', href: 'https://www.linkedin.com/in/yusufminhas/' },
];
