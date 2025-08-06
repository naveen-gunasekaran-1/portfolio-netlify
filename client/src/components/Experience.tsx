import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: 'Inplant Trainee – Mechanical Equipment Modeling',
    company: 'MSR Engineering',
    location: 'Coimbatore, India',
    period: 'Aug 2024',
    description: 'Trained in 3D modeling and mechanical prototyping processes.',
    achievements: [
      'Worked with CAD software to create equipment models',
      'Gained hands-on experience in mechanical prototyping',
      'Collaborated with the R&D team on functional designs'
    ]
  },
  {
    title: 'Inplant Trainee – Dental Equipment Modeling',
    company: 'Denmax International',
    location: 'Coimbatore, India',
    period: 'Jan 2025',
    description: 'Worked on dental equipment modeling and explored database management.',
    achievements: [
      'Designed dental equipment using modeling tools',
      'Learned MySQL-based database operations',
      'Contributed to equipment inventory system design'
    ]
  }
];
const education = [
  {
    degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
    school: 'Kongu Engineering College',
    location: 'Erode, India',
    period: '2023 - Expected 2027',
    description: 'Currently pursuing BTech in AI & ML with a focus on machine learning, data science, and web development.',
    achievements: [
      'Current CGPA: 7.28',
      'Finalist in College-Level Ideathon (2024)',
      'Projects on medical LLMs, stock prediction, and tracking apps'
    ]
  },
  {
    degree: 'Higher Secondary Education (HSC)',
    school: 'Thangamani Matriculation Higher Secondary School',
    location: 'Chennai, India',
    period: '2021 - 2023',
    description: 'Completed HSC with a focus on science and mathematics.',
    achievements: [
      'Secured 75% overall',
      'Participated in inter-school science exhibitions',
      'Led final year academic project team'
    ]
  }
];
const certifications = [
  'Oracle APEX Cloud Developer Professional – Oracle University (May 2025)'
];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-red-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center mb-8"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                <Award className="text-red-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-gray-700 hover:border-red-500 transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <div className="flex items-center text-red-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 mb-3">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-red-500 mr-2">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center mb-8"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="text-red-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </motion.div>

            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-gray-700 hover:border-red-500 transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <div className="flex items-center text-red-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 mb-3">
                      <span className="font-semibold">{edu.school}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-red-500 mr-2">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Certifications</h4>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-3 rounded-lg flex items-center hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;