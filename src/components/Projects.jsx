import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, ShoppingCart, Edit } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FabStash - Inventory Management System',
      description: 'A comprehensive inventory management system built with modern web technologies. Features inventory tracking, user management, and real-time updates.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Django', 'REST API', 'tailwindcss'],
      github: 'https://github.com/DhiyaJoseph/fabstash',
      live: '#',
      icon: Code,
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce website with user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Redux', 'Node.js', 'API'],
      github: 'https://github.com/DhiyaJoseph/E-commerce',
      live: '#',
      icon: ShoppingCart,
      featured: true
    },
    {
      title: 'SVG Editing Application',
      description: 'Interactive SVG editor with drawing tools, shape manipulation, and export functionality. Built with vanilla JavaScript and modern web APIs.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'SVG API', 'HTML5 Canvas', 'CSS3'],
      github: 'https://github.com/DhiyaJoseph/SVG-Editing-App',
      live: '#',
      icon: Edit,
      featured: false
    },
    {
      title: 'Personal Portfolio',
      description: 'Responsive portfolio website showcasing my projects and skills. Built with modern design principles and smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript','JavaScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/DhiyaJoseph/Dhiyaportfolio',
      live: 'https://dhiyaportfolio.vercel.app/',
      icon: Palette,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-lg overflow-hidden hover-lift ${
                project.featured ? 'lg:grid lg:grid-cols-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-64 lg:h-auto' : 'h-48'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <project.icon className="w-8 h-8 text-primary-400" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-3 text-primary-400">
                  {project.title}
                </h3>
                <p className="text-dark-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-effect hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;