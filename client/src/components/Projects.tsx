import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import raaahtrackImage from '../Assets/raahtrack.png';
import stockmarketImage from '../Assets/stockmarket.png';
import facultymanagementImage from '../Assets/facultyManage.png';
import portfolioImage from '../Assets/portfolio.png';
import FH1 from '../Assets/freelancershub/FH-1.png';
import FH2 from '../Assets/freelancershub/FH-2.png';
import FH3 from '../Assets/freelancershub/FH-3.png';
import FH4 from '../Assets/freelancershub/FH-4.png';
import FH5 from '../Assets/freelancershub/FH-5.png';
import p1 from '../Assets/portfolio/p1.png';
import p2 from '../Assets/portfolio/p2.png';
import p3 from '../Assets/portfolio/p3.png';
import p4 from '../Assets/portfolio/p4.png';
import p5 from '../Assets/portfolio/p5.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
  {
    id: 1,
    title: 'RAAHTRACK – Local Bus Tracking App',
    description: 'A real-time local bus tracking app developed using React Native, Firebase Firestore, and Node.js. Allows passengers to view live bus locations and estimated arrival times.',
    image: raaahtrackImage,
    screenshots: [
      raaahtrackImage,
      // Add more screenshots here
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/raahtrack-local-bus-tracking-system',
    featured: true
  },
  {
    id: 2,
    title: 'Medical Coding & Decoding using LLM',
    description: 'A project leveraging Mistral7B and HuggingFace Transformers to predict ICD-10 codes from clinical text using deep learning techniques like CNN and RNN.',
    image: 'https://images.pexels.com/photos/7821267/pexels-photo-7821267.jpeg',
    screenshots: [
      'https://images.pexels.com/photos/7821267/pexels-photo-7821267.jpeg',
      // Add more screenshots here
    ],
    technologies: ['Python', 'PyTorch', 'Transformers', 'Mistral7B', 'Pandas'],
    liveUrl: 'https://naveen-gunasekaran-1.github.io/medical-coding-prototype/',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/medical-coding-decoding-using-llm',
    featured: true
  },
  {
    id: 3,
    title: 'Stock Market Prediction using ML',
    description: 'Utilized machine learning techniques to forecast stock market trends using historical data and indicators. Visualized results using Matplotlib.',
    image: stockmarketImage,
    screenshots: [
      stockmarketImage,
      // Add more screenshots here
    ],
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib','streamlit'],
    liveUrl: 'https://bse-stock-predictor-gzp4dlzyhiqedhpsr9x6fx.streamlit.app/',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/bse-stock-predictor',
    featured: true
  },
  {
    id: 4,
    title: 'Faculty Management System',
    description: 'A desktop-based Java application that allows administrative control over faculty data with CRUD operations using MySQL.',
    image: facultymanagementImage,
    screenshots: [
      facultymanagementImage,
      // Add more screenshots here
    ],
    technologies: ['Java', 'MySQL', 'Maven'],
    liveUrl: '#',
    githubUrl: 'https://github.com/naveen-gunasekaran-1/Faculty-Management-System-java',
    featured: true
  },
  {
  id: 5,
  title: 'FreelancerHub',
  description: 'FreelancerHub is a sleek web platform for showcasing freelance projects and services, built with React and MongoDB, featuring animated interactions and a polished dark interface.',
  image: FH1,
  screenshots: [
    FH1,
    FH2,
    FH3,
    FH4,
    FH5// Add more screenshots here
  ],
  technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Framer Motion'],
  liveUrl: '#',
  githubUrl: 'https://github.com/naveen-gunasekaran-1/freelancer-marketplace-mern',
  featured: true
},
{
  id: 6,
  title: 'Personal Developer Portfolio',
  description: 'A modern, responsive portfolio built with React showcasing my AI/ML and full-stack projects. Features include MongoDB-based contact sharing, resume download, and sleek dark UI with red accents.',
  image: portfolioImage,
  screenshots: [
    portfolioImage,
    p1,
    p2,
    p3,
    p4,
    p5
    // Add more screenshots here
  ],
  technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Framer Motion'],
  liveUrl: '#',
  githubUrl: 'https://github.com/naveen-gunasekaran-1/portfolio-netlify',
  featured: true
}
];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const openGallery = (project: Project, index: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
      );
    }
  };

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
                    {project.screenshots && project.screenshots.length > 0 && (
                      <motion.button
                        onClick={() => openGallery(project)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                        title="View Screenshots"
                      >
                        <ImageIcon size={20} />
                      </motion.button>
                    )}
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
                <div className="relative group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.screenshots && project.screenshots.length > 0 && (
                    <button
                      onClick={() => openGallery(project)}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <div className="bg-blue-500 text-white p-2 rounded-full">
                        <ImageIcon size={20} />
                      </div>
                    </button>
                  )}
                </div>
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

        {/* Screenshot Gallery Modal */}
        <AnimatePresence>
          {selectedProject && selectedProject.screenshots && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeGallery}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-6xl w-full bg-gray-800 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeGallery}
                  className="absolute top-4 right-4 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Project Title */}
                <div className="absolute top-4 left-4 z-10 bg-black/70 px-4 py-2 rounded-lg">
                  <h3 className="text-white font-bold">{selectedProject.title}</h3>
                  <p className="text-gray-300 text-sm">
                    Screenshot {currentImageIndex + 1} of {selectedProject.screenshots.length}
                  </p>
                </div>

                {/* Main Image */}
                <div className="relative aspect-video bg-black">
                  <img
                    src={selectedProject.screenshots[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Navigation Buttons */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Thumbnail Strip */}
                {selectedProject.screenshots.length > 1 && (
                  <div className="bg-gray-900 p-4 overflow-x-auto">
                    <div className="flex gap-2 justify-center">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? 'border-red-500 scale-110'
                              : 'border-transparent hover:border-gray-500'
                          }`}
                        >
                          <img
                            src={screenshot}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;