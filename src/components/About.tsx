import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Lightbulb, Target, User, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, and cloud platforms'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Strong foundation in security principles and ethical hacking practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Passionate about creating solutions that solve real-world problems'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering high-quality results and continuous learning'
    }
  ];

  const personalInfo = [
    {
      icon: User,
      label: 'Full Name',
      value: 'Dhiya Joseph'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kerala, India'
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech Computer Science & Engineering'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            I'm a passionate Computer Science student with a strong foundation in both 
            development and cybersecurity, always eager to learn and create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info & Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personal Information Cards */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary-400">Personal Information</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect p-4 rounded-lg flex items-center gap-4"
                  >
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-dark-400 text-sm">{info.label}</p>
                      <p className="text-dark-200 font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Journey Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary-400">My Journey</h3>
              <div className="space-y-4 text-dark-300">
                <p>
                  Currently pursuing my B.Tech in Computer Science and Engineering at 
                  Sree Narayana Gurukulam College of Engineering, I've developed a strong 
                  passion for both web development and cybersecurity.
                </p>
                <p>
                  My journey began with curiosity about how things work behind the scenes, 
                  which led me to explore various programming languages and frameworks. 
                  I've worked on multiple projects ranging from e-commerce platforms to 
                  creative web applications.
                </p>
                <p>
                  Beyond coding, I'm deeply interested in cybersecurity and ethical hacking, 
                  constantly learning about new security vulnerabilities and protection methods. 
                  I believe in building secure, scalable, and user-friendly applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg hover-lift"
              >
                <item.icon className="w-8 h-8 text-primary-400 mb-4" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;