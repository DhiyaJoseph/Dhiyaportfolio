import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 75 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Django', level: 90 },
        { name: 'Express.js', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'Postman', level: 75 },
        { name: 'Figma', level: 90 },
        { name: 'VS Code', level: 95 }
      ]
    },
    {
      title: 'Cybersecurity',
      skills: [
        { name: 'Ethical Hacking', level: 70 },
        { name: 'Network Security', level: 65 },
        { name: 'Penetration Testing', level: 60 },
        { name: 'Security Auditing', level: 65 },
        { name: 'Vulnerability Assessment', level: 70 },
        { name: 'OWASP', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-dark-200 font-medium">{skill.name}</span>
                      <span className="text-dark-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;