import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind CSS', level: 65 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'TypeScript', level: 75 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase Firestore', level: 78 },
      { name: 'MySQL', level: 80 }
    ]
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'PyTorch', level: 70 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'Pandas & NumPy', level: 80 },
      { name: 'HuggingFace Transformers', level: 70 }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Postman / REST APIs', level: 75 },
      { name: 'CAD Tools (Inplant)', level: 65 }
    ]
  }
];
const technologies = [
  'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js',
  'MongoDB', 'Firebase', 'MySQL', 'HTML', 'CSS', 'Tailwind CSS',
  'Python', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy',
  'HuggingFace Transformers', 'Framer Motion', 'Git', 'GitHub',
  'Oracle APEX', 'REST APIs', 'CAD Tools'
];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-red-500">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-red-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 hover:bg-red-500/20 text-gray-300 hover:text-red-500 px-4 py-2 rounded-full text-sm transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;