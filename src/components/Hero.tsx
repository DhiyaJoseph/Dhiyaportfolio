import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import profileImage from '../assets/profile_image.jpg';
const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/DhiyaJoseph', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhiya-joseph', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhiyajsph@gmail.com', label: 'Email' },

  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
       
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
            
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-400/30 shadow-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 backdrop-blur-sm">
               
                <img
                  src={profileImage}
                  alt="Dhiya Joseph - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5"></div>
              </div>
              
             
              <div className="absolute inset-0 rounded-full border-2 border-primary-400/20 animate-pulse"></div>
              
            
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Dhiya Joseph</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer & Cybersecurity Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-dark-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Full-stack developer and cybersecurity enthusiast passionate about building secure, user-centric web solutions using modern technologies.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-all duration-300 hover-lift"
                aria-label={link.label}
              >
                <link.icon size={24} className="text-primary-400" />
              </a>
            ))}
          </motion.div>

         
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover-lift"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1WWqsTXesZpjW6NaSIRHhUrDeLoVpsqlE/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-effect hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 hover-lift flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

       
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-primary-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;