import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    id: 1,
    title: 'RAAHTRACK – Local Bus Tracking App',
    description: 'A real-time local bus tracking app developed using React Native, Firebase Firestore, and Node.js. Allows passengers to view live bus locations and estimated arrival times.',
    image: 'https://images.pexels.com/photos/12367460/pexels-photo-12367460.jpeg',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/raahtrack-local-bus-tracking-system  s',
    featured: true
  },
  {
    id: 2,
    title: 'Medical Coding & Decoding using LLM',
    description: 'A project leveraging Mistral7B and HuggingFace Transformers to predict ICD-10 codes from clinical text using deep learning techniques like CNN and RNN.',
    image: 'https://images.pexels.com/photos/7821267/pexels-photo-7821267.jpeg',
    technologies: ['Python', 'PyTorch', 'Transformers', 'Mistral7B', 'Pandas'],
    liveUrl: 'https://naveen-gunasekaran-1.github.io/medical-coding-prototype/',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/medical-coding-decoding-using-llm',
    featured: true
  },
  {
    id: 3,
    title: 'Stock Market Prediction using ML',
    description: 'Utilized machine learning techniques to forecast stock market trends using historical data and indicators. Visualized results using Matplotlib.',
    image: 'https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib','streamlit'],
    liveUrl: 'https://bse-stock-predictor-gzp4dlzyhiqedhpsr9x6fx.streamlit.app/',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/bse-stock-predictor',
    featured: false
  },
  {
    id: 4,
    title: 'Faculty Management System',
    description: 'A desktop-based Java application that allows administrative control over faculty data with CRUD operations using MySQL.',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Java', 'MySQL', 'Maven'],
    liveUrl: '#',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/Faculty-Management-System-java',
    featured: false
  },
  {
  id: 5,
  title: 'Personal Developer Portfolio',
  description: 'A modern, responsive portfolio built with React showcasing my AI/ML and full-stack projects. Features include MongoDB-based contact sharing, resume download, and sleek dark UI with red accents.',
  image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800',
  technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Framer Motion'],
  liveUrl: '#',
  githubUrl: 'https://github.com/naveen-gunasekaran-1/portfolio-netlify',
  featured: false
}

];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="text-red-500 hover:text-red-400 flex items-center gap-2 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-300"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-red-500/20 text-red-500 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.liveUrl}
                      className="text-red-500 hover:text-red-400 text-sm flex items-center gap-1 transition-colors duration-300"
                    >
                      <Eye size={14} />
                      View
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors duration-300"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;