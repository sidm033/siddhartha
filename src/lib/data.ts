export const siteConfig = {
  name: 'Siddhartha Mukherjee',
  title: 'Senior Full Stack & AI Engineer',
  description: 'I build AI products, SaaS platforms, mobile applications, cloud systems, and enterprise solutions from idea to production.',
  url: 'https://sidm033.github.io/siddhartha',
  email: 'siddhartham94@gmail.com',
  phone: '+919874440732',
  location: 'India',
  github: 'https://github.com/S-iddhartham',
  linkedin: 'https://in.linkedin.com/in/siddhartha-mukherjee-231a0b143',
  twitter: 'https://twitter.com/siddhartham94',
  stackoverflow: 'https://bit.ly/3z3wOix',
}

export const heroTypingPhrases = [
  'AI-Powered Products',
  'Enterprise Platforms',
  'Mobile Applications',
  'Startup MVPs',
  'Scalable Cloud Systems',
  'SaaS Solutions',
]

export const metrics = [
  { label: 'Years Experience', value: 9, suffix: '+' },
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Mobile Applications', value: 20, suffix: '+' },
  { label: 'Web Platforms', value: 30, suffix: '+' },
  { label: 'AI Integrations', value: 15, suffix: '+' },
  { label: 'Users Impacted', value: 100, suffix: 'K+' },
]

export const skillCategories = [
  {
    name: 'Frontend',
    icon: 'Monitor',
    color: '#2563EB',
    skills: [
      { name: 'Flutter', proficiency: 95, years: 4, projects: 15 },
      { name: 'React', proficiency: 92, years: 6, projects: 20 },
      { name: 'Next.js', proficiency: 90, years: 4, projects: 12 },
      { name: 'Angular', proficiency: 95, years: 7, projects: 18 },
      { name: 'React Native', proficiency: 88, years: 5, projects: 10 },
      { name: 'Ionic', proficiency: 85, years: 5, projects: 8 },
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    color: '#7C3AED',
    skills: [
      { name: 'Node.js', proficiency: 95, years: 8, projects: 30 },
      { name: 'Express.js', proficiency: 95, years: 8, projects: 28 },
      { name: 'Python', proficiency: 88, years: 5, projects: 12 },
      { name: 'Django', proficiency: 85, years: 4, projects: 8 },
      { name: 'FastAPI', proficiency: 82, years: 3, projects: 6 },
    ],
  },
  {
    name: 'Mobile',
    icon: 'Smartphone',
    color: '#06B6D4',
    skills: [
      { name: 'Flutter', proficiency: 95, years: 4, projects: 15 },
      { name: 'React Native', proficiency: 88, years: 5, projects: 10 },
      { name: 'Android', proficiency: 80, years: 4, projects: 8 },
      { name: 'iOS', proficiency: 78, years: 3, projects: 6 },
    ],
  },
  {
    name: 'Cloud & AWS',
    icon: 'Cloud',
    color: '#F59E0B',
    skills: [
      { name: 'AWS Lambda', proficiency: 90, years: 5, projects: 15 },
      { name: 'API Gateway', proficiency: 90, years: 5, projects: 15 },
      { name: 'DynamoDB', proficiency: 88, years: 4, projects: 12 },
      { name: 'EC2 / S3', proficiency: 92, years: 6, projects: 20 },
      { name: 'CloudFront', proficiency: 85, years: 4, projects: 10 },
    ],
  },
  {
    name: 'DevOps',
    icon: 'GitBranch',
    color: '#10B981',
    skills: [
      { name: 'Docker', proficiency: 88, years: 5, projects: 15 },
      { name: 'CI/CD', proficiency: 90, years: 6, projects: 20 },
      { name: 'GitHub Actions', proficiency: 88, years: 4, projects: 12 },
      { name: 'Serverless', proficiency: 90, years: 5, projects: 14 },
    ],
  },
  {
    name: 'AI & ML',
    icon: 'Brain',
    color: '#EC4899',
    skills: [
      { name: 'OpenAI / GPT', proficiency: 92, years: 3, projects: 12 },
      { name: 'Claude API', proficiency: 90, years: 2, projects: 8 },
      { name: 'Gemini', proficiency: 85, years: 2, projects: 6 },
      { name: 'RAG Systems', proficiency: 88, years: 2, projects: 8 },
      { name: 'AI Agents', proficiency: 85, years: 2, projects: 6 },
      { name: 'Prompt Eng.', proficiency: 95, years: 3, projects: 15 },
    ],
  },
  {
    name: 'Databases',
    icon: 'Database',
    color: '#EF4444',
    skills: [
      { name: 'PostgreSQL', proficiency: 92, years: 7, projects: 20 },
      { name: 'MongoDB', proficiency: 90, years: 6, projects: 18 },
      { name: 'MySQL', proficiency: 90, years: 8, projects: 22 },
      { name: 'Redis', proficiency: 85, years: 5, projects: 12 },
      { name: 'DynamoDB', proficiency: 88, years: 4, projects: 10 },
      { name: 'Elasticsearch', proficiency: 82, years: 3, projects: 8 },
    ],
  },
]

export const projects = [
  {
    title: 'Legalkart',
    subtitle: 'Multi-Platform Legal Ecosystem',
    description: 'End-to-end legal platform connecting lawyers and clients across web, Android, and iOS with real-time communication, case management, and payment processing.',
    problem: 'Legal services in India are fragmented and inaccessible. Clients struggle to find, communicate with, and manage relationships with lawyers efficiently.',
    challenge: 'Building a real-time multi-platform ecosystem with video/audio calls, secure document handling, payment processing, and case management at scale.',
    solution: 'Architected a unified platform using Flutter for mobile, React for web, Node.js microservices backend, and AWS cloud infrastructure with serverless components.',
    impact: 'Connected thousands of lawyers with clients, reduced case management time by 60%, processed secure payments, and delivered seamless cross-platform experience.',
    tech: ['Flutter', 'React', 'Node.js', 'AWS', 'WebRTC', 'Sequelize'],
    features: ['Video Calls', 'Audio Calls', 'Chat', 'Case Management', 'Scheduling', 'Document Review', 'Payments'],
    color: '#2563EB',
    architecture: [
      { name: 'Flutter / React', type: 'client' },
      { name: 'API Gateway', type: 'gateway' },
      { name: 'Node.js Services', type: 'service' },
      { name: 'PostgreSQL', type: 'database' },
      { name: 'AWS S3 / Lambda', type: 'cloud' },
    ],
  },
  {
    title: 'PSL Client Central',
    subtitle: 'Enterprise Lawyer Management',
    description: 'Comprehensive lawyer management platform for managing clients, cases, invoicing, and workflow automation across web and mobile.',
    problem: 'Law firms relied on manual processes for client management, case tracking, and billing, leading to inefficiencies and revenue leakage.',
    challenge: 'Creating an enterprise-grade system with complex workflows, automated invoicing, multi-role access control, and cross-platform compatibility.',
    solution: 'Built with Angular 14 for web, Ionic 3 for mobile apps, and Node.js backend with automated invoice generation and workflow engines.',
    impact: 'Automated 80% of manual billing processes, improved case tracking efficiency, reduced administrative overhead for legal teams.',
    tech: ['Angular 14', 'Node.js', 'Ionic 3', 'PostgreSQL', 'AWS'],
    features: ['Client Management', 'Case Management', 'Invoice System', 'Workflow Automation'],
    color: '#7C3AED',
    architecture: [
      { name: 'Angular / Ionic', type: 'client' },
      { name: 'Express.js API', type: 'gateway' },
      { name: 'Business Logic', type: 'service' },
      { name: 'PostgreSQL', type: 'database' },
      { name: 'PDF / Email Services', type: 'cloud' },
    ],
  },
  {
    title: 'Astro360',
    subtitle: 'AI-Powered Astrology Platform',
    description: 'Full-featured astrology platform with live astrologer consultations, Kundli generation, Rashi analysis, and digital wallet system.',
    problem: 'Traditional astrology consultations required physical presence. Digital platforms lacked real-time interaction and accurate computational astrology.',
    challenge: 'Implementing real-time chat/video with astrologers, complex astrological computations, minute-based billing, and wallet management.',
    solution: 'Developed with Angular 12 frontend, Node.js backend with real-time WebSocket connections, automated Kundli generation engine, and integrated payment wallet.',
    impact: 'Enabled thousands of live consultations, processed real-time payments, generated accurate astrological charts computationally.',
    tech: ['Angular 12', 'Node.js', 'WebSocket', 'MongoDB', 'Redis'],
    features: ['Live Chat', 'Kundli Generation', 'Rashi Analysis', 'Wallet System', 'Online Consultation'],
    color: '#06B6D4',
    architecture: [
      { name: 'Angular 12', type: 'client' },
      { name: 'WebSocket Server', type: 'gateway' },
      { name: 'Node.js API', type: 'service' },
      { name: 'MongoDB / Redis', type: 'database' },
      { name: 'Payment Gateway', type: 'cloud' },
    ],
  },
  {
    title: 'ScrapeHub',
    subtitle: 'Intelligent Web Scraping Platform',
    description: 'Advanced automated web scraping system with OCR capabilities, CAPTCHA solving, and specialized data extraction from government and court portals.',
    problem: 'Manual data collection from government portals and court systems was time-consuming, error-prone, and could not scale.',
    challenge: 'Overcoming anti-bot measures, solving various CAPTCHA types (image, text, reCAPTCHA), handling dynamic content, and ensuring reliable large-scale data extraction.',
    solution: 'Built with Python/Django backend, integrated OCR engines for CAPTCHA resolution, implemented rotating proxies, headless browsers, and distributed scraping architecture.',
    impact: 'Automated collection of millions of court records, reduced data collection time by 95%, achieved 98% CAPTCHA solving accuracy.',
    tech: ['Python', 'Django', 'OCR', 'Selenium', 'Redis', 'PostgreSQL'],
    features: ['OCR', 'CAPTCHA Solving', 'Automation', 'Court Data Collection', 'Government Data Extraction'],
    color: '#10B981',
    architecture: [
      { name: 'Task Queue', type: 'client' },
      { name: 'Scraping Engine', type: 'gateway' },
      { name: 'OCR / CAPTCHA Solver', type: 'service' },
      { name: 'PostgreSQL', type: 'database' },
      { name: 'Redis Queue', type: 'cloud' },
    ],
  },
]

export const timeline = [
  {
    year: '2017',
    title: 'Software Developer',
    company: 'WRC Technologies Pvt. Ltd.',
    description: 'Started career building mobile applications with Ionic and React Native. Contributed to backend services using Python/Django and Node.js.',
    skills: ['Ionic 3', 'React Native', 'Python', 'Django', 'Node.js'],
  },
  {
    year: '2019',
    title: 'Senior Full Stack Developer',
    company: 'Black Coat Technologies Pvt. Ltd.',
    description: 'Promoted to senior role. Architected scalable RESTful APIs, led cross-functional teams, and mentored junior developers.',
    skills: ['Angular', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    year: '2021',
    title: 'Cloud & Architecture Focus',
    company: 'Black Coat Technologies',
    description: 'Led cloud migration initiatives. Designed serverless architectures on AWS. Implemented CI/CD pipelines and containerized deployments.',
    skills: ['AWS Lambda', 'Docker', 'CI/CD', 'Serverless', 'Microservices'],
  },
  {
    year: '2023',
    title: 'AI Development & Integration',
    company: 'Black Coat Technologies',
    description: 'Pioneered AI integration into production applications. Built RAG systems, AI agents, and automated workflows using OpenAI, Claude, and Gemini.',
    skills: ['OpenAI', 'Claude API', 'RAG', 'AI Agents', 'LLM Apps'],
  },
  {
    year: '2025',
    title: 'IIT Roorkee AI/ML Certification',
    company: 'IIT Roorkee',
    description: 'Completed Executive Post Graduate Certification in Artificial Intelligence and Machine Learning from IIT Roorkee, Department of Science & Technology (Government of India).',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Systems'],
  },
]

export const aiLabItems = [
  {
    title: 'AI Agents',
    description: 'Autonomous AI agents that can reason, plan, and execute complex multi-step tasks with tool integration.',
    icon: 'Bot',
    color: '#2563EB',
  },
  {
    title: 'RAG Systems',
    description: 'Retrieval-Augmented Generation pipelines for building AI applications grounded in custom knowledge bases.',
    icon: 'Database',
    color: '#7C3AED',
  },
  {
    title: 'Prompt Engineering',
    description: 'Advanced prompt design and optimization for production LLM applications with consistent, reliable outputs.',
    icon: 'MessageSquare',
    color: '#06B6D4',
  },
  {
    title: 'Automation Workflows',
    description: 'End-to-end AI-powered automation pipelines that eliminate repetitive tasks and scale operations.',
    icon: 'Workflow',
    color: '#10B981',
  },
  {
    title: 'OCR & Computer Vision',
    description: 'Intelligent document processing, image recognition, and CAPTCHA solving systems using computer vision.',
    icon: 'Eye',
    color: '#F59E0B',
  },
  {
    title: 'LLM Applications',
    description: 'Production-grade applications powered by large language models with fine-tuning and evaluation pipelines.',
    icon: 'Brain',
    color: '#EC4899',
  },
]

export const whatCanIBuild = [
  { title: 'AI SaaS', icon: 'Brain', time: '30 days' },
  { title: 'Marketplace', icon: 'Store', time: '30 days' },
  { title: 'Mobile App', icon: 'Smartphone', time: '21 days' },
  { title: 'Admin Panel', icon: 'LayoutDashboard', time: '14 days' },
  { title: 'CRM', icon: 'Users', time: '30 days' },
  { title: 'ERP System', icon: 'Building2', time: '30 days' },
  { title: 'AI Chatbot', icon: 'MessageCircle', time: '14 days' },
  { title: 'Automation Platform', icon: 'Zap', time: '21 days' },
]

export const aiResponses: Record<string, string> = {
  'who': `Siddhartha Mukherjee is a Senior Full Stack & AI Engineer with 9+ years of experience. He holds an Executive PG Certification in AI/ML from IIT Roorkee (Dept. of Science & Technology, Govt. of India). He specializes in building scalable products using Flutter, React, Node.js, AWS, and cutting-edge AI technologies. Currently at Black Coat Technologies, he architects enterprise-grade platforms and AI-powered solutions.`,
  'flutter': `Siddhartha has extensive Flutter experience, building cross-platform applications for Legalkart (legal ecosystem with video calls, case management, payments) and other major projects. He's delivered 15+ Flutter applications across Android, iOS, and Web, with expertise in state management, custom animations, and native integrations.`,
  'ai': `With an IIT Roorkee certification in AI/ML, Siddhartha has deep expertise in: OpenAI/GPT integration, Claude API, Gemini, RAG systems, AI Agents, Prompt Engineering, LLM Applications, OCR/Computer Vision, and AI Automation. He's delivered 15+ AI integrations in production applications.`,
  'aws': `Siddhartha architects cloud-native solutions on AWS including: Lambda (serverless), API Gateway, DynamoDB, EC2, S3, CloudFront, and more. He's designed and deployed scalable microservice architectures handling thousands of concurrent users with automated CI/CD pipelines.`,
  'problem': `Siddhartha solves complex engineering challenges: Building multi-platform apps from scratch, designing scalable cloud architectures, integrating AI/ML into production systems, creating automation platforms, developing real-time communication systems, and building enterprise SaaS products. From startup MVPs to enterprise platforms — idea to production.`,
  'hire': `You should hire Siddhartha because he brings: 9+ years of full-stack expertise, IIT Roorkee AI/ML certification, proven track record of delivering 50+ projects, ability to architect and build complete products end-to-end, expertise across frontend, backend, mobile, cloud, and AI, and a startup builder mindset that moves fast without compromising quality.`,
  'default': `I'm Siddhartha's AI assistant. I can answer questions about his skills, projects, experience, AI expertise, cloud architecture, and more. Try asking: "Show Flutter projects", "What AI tools does he use?", or "Why should we hire him?"`,
}
