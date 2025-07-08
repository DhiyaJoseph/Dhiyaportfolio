import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Universal College of Engineering',
      period: '2019 - 2023',
      description: 'Gained a strong foundation in electronics with a focus on programming, web technologies, and cybersecurity. Actively engaged in technical projects and paper presentations, blending core engineering with modern software development skills.',
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      title: 'Full Stack Development',
      description: 'Successfully completed multiple web development projects using modern technologies',
      icon: Award
    },
    {
      title: 'Open Source Contributions',
      description: 'Active contributor to open source projects on GitHub',
      icon: Award
    },
    {
      title: 'Cybersecurity Knowledge',
      description: 'Self-taught ethical hacking and security assessment techniques',
      icon: Award
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            My academic journey and key accomplishments in technology and development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary-400 flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg mb-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <edu.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-primary-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-dark-400 mb-3">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-dark-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary-400 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-lg hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-500/20 rounded-lg">
                      <achievement.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-dark-300">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 glass-effect p-6 rounded-lg"
            >
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-dark-300">• Web Development</p>
                  <p className="text-dark-300">• React & Node.js</p>
                  <p className="text-dark-300">• Database Design</p>
                </div>
                <div>
                  <p className="text-dark-300">• Cybersecurity</p>
                  <p className="text-dark-300">• Problem Solving</p>
                  <p className="text-dark-300">• Team Collaboration</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;