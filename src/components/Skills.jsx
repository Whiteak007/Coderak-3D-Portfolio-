import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
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

  const skillItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #0f0728 0%, #050414 100%)"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-900 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-900 blur-3xl"></div>
      </div>

      {/* Section Title */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            SKILLS
          </span>
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto mt-2 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p 
          className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Possessing a range of technical proficiencies gained from real-world application in numerous projects and practical scenarios.
        </motion.p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              className="h-full"
            >
              <div 
                className="h-full bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-lg"
                style={{
                  boxShadow: "0 8px 32px rgba(130, 69, 236, 0.2)"
                }}
              >
                <motion.h3 
                  className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-300 to-pink-200 text-transparent bg-clip-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {category.title}
                </motion.h3>

                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  variants={container}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItem}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(130, 69, 236, 0.1)",
                        borderColor: "#8245ec"
                      }}
                      className="flex flex-col items-center justify-center space-y-2 bg-gray-800/50 border border-gray-700 rounded-xl py-3 px-2 text-center transition-all duration-300"
                    >
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                        />
                      </motion.div>
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;