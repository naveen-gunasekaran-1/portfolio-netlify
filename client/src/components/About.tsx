import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building robust frontend and backend solutions using MERN stack and Firebase'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Developing LLMs and ML models for healthcare, prediction, and data analysis'
    },
    {
      icon: Zap,
      title: 'Performance & Optimization',
      description: 'Delivering fast, scalable apps with optimized APIs and efficient ML pipelines'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Effective team player with hands-on experience from projects and ideathons'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Aspiring Full-Stack & AI Developer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm currently pursuing my B.Tech in Artificial Intelligence & Machine Learning at Kongu Engineering College. My passion lies in building full-stack applications, crafting LLM-driven tools, and solving real-world problems using machine learning.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I've worked on diverse projects ranging from real-time bus tracking systems to medical coding prediction using large language models. I'm a fast learner who thrives in collaborative environments and constantly explores emerging technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-red-500 font-semibold">5+</span>
                <span className="text-gray-300 ml-2">Projects Built</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-red-500 font-semibold">2</span>
                <span className="text-gray-300 ml-2">Industry Trainings</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-red-500 font-semibold">1</span>
                <span className="text-gray-300 ml-2">Hackathon Finalist</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="text-red-500" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
