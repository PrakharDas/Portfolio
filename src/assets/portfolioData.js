import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiFlask,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiNetlify,
  SiVercel,
  SiRender,
  SiReact,
  SiTensorflow,
  SiOpenai,
} from 'react-icons/si'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const roles = [
  'Full-Stack Developer',
  'Flutter Developer',
  'Software Engineer',
  'IoT Engineer',
  'React Developer',
]

export const heroStats = [
  { label: 'Major Projects', value: 3, suffix: '+' },
  { label: 'Internship Experience', value: 1, suffix: '+' },
  { label: 'Core Disciplines', value: 2, suffix: '+' },
  { label: 'Systems Built', value: 6, suffix: '+' },
]

export const highlights = [
  {
    title: 'Internship Experience',
    description:
      'Hands-on experience delivering production modules in a fast-paced startup environment.',
  },
  {
    title: 'Real Projects Built',
    description:
      'Built complete systems across web, mobile, AI, and IoT with practical use cases.',
  },
  {
    title: 'Full-Stack Skills',
    description:
      'Comfortable shipping interfaces, APIs, databases, and dashboards end-to-end.',
  },
  {
    title: 'IoT + AI Integration',
    description:
      'Designed intelligent solutions combining embedded systems and ML-powered insights.',
  },
  {
    title: 'Fast Learner',
    description:
      'Quickly adapts to new tools, frameworks, and project contexts while keeping delivery focused.',
  },
  {
    title: 'Team Collaboration',
    description:
      'Works effectively with teammates through communication, ownership, and consistent iteration.',
  },
  {
    title: 'Problem Solver',
    description:
      'Approaches technical challenges with calm debugging, clarity, and practical implementation.',
  },
]

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, level: 90 },
      { name: 'Flutter', icon: SiFlutter, level: 88 },
      { name: 'HTML', icon: FaHtml5, level: 94 },
      { name: 'CSS', icon: FaCss3Alt, level: 91 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 89 },
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 86 },
      { name: 'Express.js', icon: SiExpress, level: 85 },
      { name: 'Flask', icon: SiFlask, level: 82 },
      { name: 'Firebase', icon: SiFirebase, level: 89 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 84 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 79 },
      { name: 'Firebase Realtime DB', icon: SiFirebase, level: 90 },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: FaPython, level: 89 },
      { name: 'Java', icon: FaJava, level: 79 },
      { name: 'C++', icon: SiCplusplus, level: 75 },
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 88 },
      { name: 'GitHub', icon: FaGithub, level: 91 },
      { name: 'Netlify', icon: SiNetlify, level: 82 },
      { name: 'Vercel', icon: SiVercel, level: 84 },
      { name: 'Render', icon: SiRender, level: 80 },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'React Native', icon: SiReact, level: 84 },
      { name: 'TensorFlow', icon: SiTensorflow, level: 74 },
      { name: 'OpenAI API', icon: SiOpenai, level: 78 },
    ],
  },
]

export const experience = {
  company: 'Arthasva - FinTech & Software Services Startup',
  role: 'Software Development Intern',
  duration: 'Jun 2025 - Sep 2025',
  responsibilities: [
    'Built Transport Management System using Electron.js',
    'Developed quotation, invoice, and logistics modules',
    'Worked on LeadGen React platform',
    'Built dashboards and KPI systems',
    'Worked on React Native fintech app Nivesh',
    'Contributed in Agile collaboration, debugging, and feature delivery',
  ],
}

export const projects = [
  {
    categories: ['Flutter', 'IoT'],
    title: 'MedDrip - Intelligent Saline Monitoring System',
    description:
      'IoT-based saline monitoring system using ESP32, Firebase and Flutter with real-time tracking, alerts and automated flow control.',
    summary: 'Real-time saline monitoring with embedded sensing, mobile alerts, and safer automated supervision.',
    tech: ['ESP32', 'Firebase', 'Flutter'],
    features: [
      'Live saline level and flow-rate tracking',
      'Instant low-level alerts for caregivers',
      'Automated flow control for safer monitoring',
    ],
    image: '/projects/meddrip-preview.svg',
    imageAlt: 'MedDrip dashboard preview showing saline monitoring metrics and alerts',
    github: 'https://github.com/PrakharDas',
    demo: '',
  },
  {
    categories: ['Flutter', 'IoT'],
    title: 'ParkEase - Smart Car Parking System',
    description:
      'Smart parking solution with live slot tracking, booking system, occupancy status and instant updates.',
    summary: 'Parking operations dashboard for live availability, booking flow, and occupancy insight.',
    tech: ['ESP32', 'Firebase', 'Flutter'],
    features: [
      'Real-time parking slot availability',
      'Booking workflow with occupancy updates',
      'Low-latency sensor-driven status sync',
    ],
    image: '/projects/parkease-preview.svg',
    imageAlt: 'ParkEase parking dashboard with slot occupancy and booking states',
    github: 'https://github.com/PrakharDas',
    demo: '',
  },
  {
    categories: ['AI', 'Web'],
    title: 'Hawkeye - Drone Detection System',
    description:
      'AI-powered drone detection platform using custom YOLOv7 model with webcam, image and video detection modes.',
    summary: 'Computer-vision detection pipeline with real-time drone recognition modes.',
    tech: ['React.js', 'Flask', 'YOLOv7', 'OpenCV'],
    features: [
      'Webcam, image, and video inference modes',
      'Custom model-backed drone recognition',
      'Interactive front-end with real-time previews',
    ],
    image: '/projects/hawkeye-preview.svg',
    imageAlt: 'Hawkeye detection interface showing drone bounding boxes and confidence scores',
    github: 'https://github.com/PrakharDas',
    demo: '',
  },
]

export const education = [
  {
    institute: 'St. John College of Engineering and Management',
    degree: 'B.Tech Electronics and Computer Science',
    duration: '2022 - 2026',
    score: 'CGPA: 8.0',
  },
  {
    institute: 'Chinmaya Vidyalaya Tarapur',
    degree: 'CBSE Board',
    duration: '2020 - 2022',
    score: '',
  },
]

export const activities = [
  {
    title: 'GKDC & FKDC Go-Kart Competitions',
    points: [
      'Driver for Skid Pad and Autocross events',
      'Head of Steering Team',
      'Solved technical challenges during events',
    ],
  },
]

export const contact = {
  email: 'prakhardas48@gmail.com',
  location: 'Boisar, Maharashtra',
  github: 'https://github.com/PrakharDas',
  linkedin: 'https://www.linkedin.com/in/prakhardas48',
}

export const projectFilters = ['All', 'Web', 'Flutter', 'AI', 'IoT']
