import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/profile2.png';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            variants={itemVariants}
          >
            Hi, I am
          </motion.h1>

          {/* Name */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 8px rgba(168, 85, 247, 0.8)"
            }}
          >
            Ankit Bhagat
          </motion.h2>

          {/* Skills Heading with Typing Effect */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight min-h-[1.5em]"
            variants={itemVariants}
          >
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                1500,
                'App Developer',
                1500,
                'UI/UX Designer',
                1500,
                'Coder',
                1500,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ color: '#8245ec', display: 'inline-block' }}
            />
          </motion.div>

          {/* About Me Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            variants={itemVariants}
          >
            Currently honing my skills through hands-on, industry-level projects, I'm a budding full-stack developer adept in both front-end and back-end technologies. My focus lies in the MERN stack and other modern tools, allowing me to craft seamless user experiences and build efficient, innovative solutions.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 5px #8245ec, 0 0 10px #8245ec, 0 0 20px #8245ec'
            }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD Resume
          </motion.a>
        </div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          variants={imageVariants}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.img
              src={profileImage}
              alt="Ankit Bhagat"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              whileHover={{ scale: 1.02 }}
            />
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;