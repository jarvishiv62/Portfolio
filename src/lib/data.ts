export const personalInfo = {
  name: 'Utkarsh Maurya',
  role: 'Full Stack Developer',
  email: 'your.email@example.com',
  location: 'City, Country',
  about: 'A passionate developer with a love for creating beautiful, functional, and user-centered digital experiences.',
  avatar: '/images/avatar.jpg',
  resume: '/resume.pdf',
};

export const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
};

export const skills = {
  frontend: [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Tailwind CSS', 'Redux', 'GraphQL', 'Responsive Design'
  ],
  backend: [
    'Node.js', 'Express', 'Python', 'Django', 'RESTful APIs',
    'MongoDB', 'PostgreSQL', 'Firebase', 'Docker'
  ],
  tools: [
    'Git', 'GitHub', 'VS Code', 'Figma', 'Postman',
    'Jest', 'Cypress', 'AWS', 'Vercel', 'Netlify'
  ]
};

export const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the project and what it does. Highlight the problem it solves and the technologies used.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    image: '/images/project-1.jpg',
    github: 'https://github.com/yourusername/project-one',
    demo: 'https://project-one-demo.vercel.app',
    featured: true
  },
  // Add more projects as needed
];

export const experiences = [
  {
    id: 1,
    role: 'Senior Developer',
    company: 'Tech Company Inc.',
    period: '2020 - Present',
    description: [
      'Led a team of developers to build scalable web applications using modern technologies.',
      'Implemented new features and improved application performance, resulting in a 30% increase in user engagement.',
      'Mentored junior developers and conducted code reviews to ensure code quality.'
    ]
  },
  // Add more experiences as needed
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2016 - 2020',
    description: 'Specialized in Web Development and Software Engineering'
  },
  // Add more education entries as needed
];

export const certifications = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    issuer: 'Some Online Platform',
    date: '2021',
    credentialUrl: '#'
  },
  // Add more certifications as needed
];
