import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const professionalExperience = [
    {
      role: 'Project Associate – Information Security',
      organization: ' National Institute of Electronics and Information Technology (NIELIT), Calicut',
      location: 'Calicut, India',
      period: '06/2025 – Present',
      description: [
        'Supported the execution of the national ISEA project by assisting in cybersecurity policy implementation, vulnerability assessment, and risk management initiatives.',
        'Built secure, user-friendly tools for cybersecurity training using modern web technologies and automated workflows for vulnerability detection and reporting.',
        'Contributed to cybersecurity research and co-authored two technical papers while staying updated on emerging cyber threats.'
      ],
    },
    {
      role: 'Software Developer Technical Trainee',
      organization: 'Kerala Startup Mission | SuperFablab Kerala',
      location: 'Ernakulam, India',
      period: '06/2024 – 06/2025',
      description: [
        'Developed and maintained responsive web/mobile apps using React, Material UI, and Tailwind CSS.',
        'Integrated backend services via Fetch API, implemented dynamic state management with React Hooks.',
        'Built scalable applications with Django and REST APIs, applying UI/UX principles in collaborative team settings.'
      ],
    },
    {
      role: 'Python-Django Full Stack Development Intern',
      organization: 'GALTech Technologies Pvt Ltd',
      location: 'Thrissur, India',
      period: '07/2023 – 12/2023',
      description: [
        'Focused on full-stack development, database design, and building responsive interfaces.',
        'Adopted best practices to develop scalable applications while staying current with latest technologies.'
      ],
    },
  ];

  const achievements = [
    {
      title: 'Full Stack Development',
      description: 'Successfully completed multiple web development projects using modern technologies',
      icon: Award,
    },
    {
      title: 'Open Source Contributions',
      description: 'Active contributor to open source projects on GitHub',
      icon: Award,
    },
    {
      title: 'Cybersecurity Knowledge',
      description: 'Self-taught ethical hacking and security assessment techniques',
      icon: Award,
    },
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
            My <span className="gradient-text"> Tech Journey</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A timeline of learning, building, and growing across engineering, development, and cybersecurity domains.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary-400 flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              Professional Experience
            </h3>

            {professionalExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg mb-6"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <span className="text-dark-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-primary-400 font-medium">
                    {exp.organization} — {exp.location}
                  </p>
                  <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
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
                  <p className="text-dark-300">• React & Django</p>
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
