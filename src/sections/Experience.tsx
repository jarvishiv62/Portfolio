import React from 'react';

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Innovilla pvt ltd',
    period: 'june 2025 - Present',
    description: 'Leading a team of developers to build scalable web applications using modern technologies.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Digital Solutions',
    period: 'june 2025 - Present',
    description: 'Developed and maintained responsive web applications using React and TypeScript.',
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0 last:mb-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
