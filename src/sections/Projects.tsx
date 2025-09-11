import React from 'react';
import Link from 'next/link';

const projects = [
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

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
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
                  <Link 
                    href={project.github}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href={project.demo}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                  >
                    Live Demo
                  </Link>
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
