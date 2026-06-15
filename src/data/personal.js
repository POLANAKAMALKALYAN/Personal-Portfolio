const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const deviconPlain = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;

const data = {
  social: {
    linkedin: 'https://www.linkedin.com/in/polana-kamal-kalyan-a533a3319/', // TODO: replace with your profile URL
    instagram: 'https://www.instagram.com/kamal_polana/', // TODO
    github: 'https://github.com/POLANAKAMALKALYAN', // TODO
  },
  contact: {
    phone: '+918519869476',
    email: 'polanakamalkalyan3@gmail.com',
  },
  education: [
    {
      institution: 'Prasad V. Potluri Siddhartha Institute of Technology',
      course: 'B.Tech - Electrical and Electronics Engineering',
      period: '2023 – Present',
      score: 'CGPA: 7.85',
      location: 'Vijayawada, Andhra Pradesh, India',
    },
    {
      institution: 'Heal School',
      course: 'Intermediate - MPC',
      period: '2021 – 2023',
      score: 'CGPA: 73.5',
      location: 'Vijayawada, Andhra Pradesh',
    },
    {
      institution: 'Heal School',
      course: 'Central Board of Secondary Education',
      period: '2020 – 2021',
      score: 'CGPA: 67.5',
      location: 'Vijayawada, Andhra Pradesh',
    },
  ],
  skills: [
    { name: 'HTML', logo: devicon('html5') },
    { name: 'CSS', logo: devicon('css3') },
    { name: 'JavaScript', logo: devicon('javascript') },
    { name: 'React', logo: devicon('react') },
    { name: 'Bootstrap', logo: devicon('bootstrap') },
    { name: 'C', logo: deviconPlain('c') },
    { name: 'Python ', logo: devicon('python') },
    { name: 'MongoDB (Basic)', logo: devicon('mongodb') },
    { name: 'VS Code', logo: devicon('vscode') },
    { name: 'Jupyter Notebook', logo: devicon('jupyter') },
    { name: 'Git(Basic)', logo: devicon('git') },
    { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  ],
  experience: [
      {
      title: 'Frontend Intern',
      company: 'EMBRIZON TECHNOLOGIES',
      period: 'May 2024 – Jun 2024',
      summary:
        'Developed and optimized front-end components for eCommerce web interfaces using React and modern CSS.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    },
    {
      title: 'Web Development Intern',
      company: 'AVERIXIS SOLUTIONS ',
      period: 'Apr 2025 – Jul 2025',
      summary:
        'Built and maintained responsive web pages using HTML, CSS, JavaScript, and React; worked on performance and UX improvements.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    },
    {
      title: 'Frontend Intern',
      company: 'TEACHNOOK',
      period: 'May 2024 – Jun 2024',
      summary:
        'Developed and optimized front-end components for eCommerce web interfaces using React and modern CSS.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    },
  ],
  projects: [
    {
      title: 'Interactive Card Component',
      description:
        'A modular React card component with dynamic title and like/unlike toggle, designed to be reusable across the app.',
      tech: ['React', 'useState', 'CSS'],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
      link: '',
    },
    {
      title: 'To‑Do List',
      description:
        'A task management web app built with HTML, CSS and JavaScript that allows users to add, delete and mark tasks as complete.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
      link: '',
    },
    {
      title: 'Calculator',
      description:
        'A simple yet functional calculator using JavaScript for basic arithmetic operations with an interactive UI.',
      tech: ['JavaScript', 'CSS'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
      link: '',
    },
    {
      title: 'Weather App',
      description:
        'A weather forecasting web app that fetches real-time weather data using an API and displays temperature, humidity and conditions.',
      tech: ['HTML', 'CSS', 'JavaScript', 'RESTAPI'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
      link: '',
    },
  ],
};

export default data;



