import React from "react";
import { motion } from "framer-motion";
import { education } from "../constants";

const Education = () => {
  // Animation variants - Different from Experience component
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const rightItem = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  const timelineDot = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, #0f0728 0%, #050414 100%)"
      }}
    >
      {/* Decorative elements - Different from Experience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-900 blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-indigo-900 blur-3xl"
          animate={{
            ...floatingAnimation,
            y: [0, -15, 0],
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        />
      </div>

      {/* Section Title */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            EDUCATION
          </span>
        </h2>
        <motion.div 
          className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"
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
          My education has been a journey of learning and development. Here are the details of my academic background
        </motion.p>
      </motion.div>

      {/* Education Timeline - Different animation style */}
      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Vertical line - Animated differently */}
        <motion.div 
          className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 h-full"
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={index % 2 === 0 ? item : rightItem}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle - Different animation */}
            <motion.div 
              className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 bg-gray-800 border-4 border-[#3b82f6] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg"
              variants={timelineDot}
              whileHover={{ 
                scale: 1.1, 
                borderColor: "#60a5fa",
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)"
              }}
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-3/4 h-3/4 object-contain rounded-full"
              />
            </motion.div>

            {/* Content Section - Different styling */}
            <motion.div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-lg ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-16`}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              style={{
                backdropFilter: "blur(10px)"
              }}
            >
              {/* Flex container for image and text */}
              <div className="flex items-start space-x-6">
                {/* School Logo/Image - Different styling */}
                <motion.div 
                  className="w-24 h-16 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex-shrink-0"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-2 bg-white"
                  />
                </motion.div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-lg text-gray-300 mt-1">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom - Different styling */}
                  <p className="text-sm text-gray-400 mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade - Highlighted differently */}
              <motion.div 
                className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-300 font-medium">
                  <span className="text-blue-400">Grade: </span>
                  <span className="text-white">{edu.grade}</span>
                </p>
              </motion.div>

              <motion.p 
                className="mt-4 text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {edu.desc}
              </motion.p>

              {/* Optional: Add courses or achievements */}
              {edu.courses && (
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h5 className="font-medium text-white mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Key Courses:
                  </h5>
                  <ul className="grid grid-cols-2 gap-2 mt-2">
                    {edu.courses.map((course, index) => (
                      <motion.li
                        key={index}
                        className="text-xs sm:text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700"
                        whileHover={{ 
                          scale: 1.03,
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          borderColor: "#3b82f6"
                        }}
                      >
                        {course}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;