import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image?: string;
}

const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
  >
    {children}
  </Link>
);

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of the project and what it does.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project and what it does.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const projectList: Project[] = [
    {
      title: 'Project One',
      description: 'A brief description of the project and what it does.',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      image: '/images/project1.jpg'
    },
    {
      title: 'Project Two',
      description: 'A brief description of the project and what it does.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '/images/project2.jpg'
    },
    {
      title: 'Project Three',
      description: 'A brief description of the project and what it does.',
      tags: ['TypeScript', 'React', 'GraphQL'],
      github: '#',
      demo: '#',
      image: '/images/project3.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <CustomLink href={project.github}>GitHub</CustomLink>
                  <CustomLink href={project.demo}>Live Demo</CustomLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
