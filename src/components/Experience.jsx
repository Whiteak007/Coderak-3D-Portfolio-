import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";

const Experience = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineDot = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #0f0728 0%, #050414 100%)"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-purple-900 blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full bg-indigo-900 blur-3xl"></div>
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
            EXPERIENCE
          </span>
        </h2>
        <motion.div 
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto mt-4 rounded-full"
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
           My main experience is understanding and processing information from lots of text. This helps me communicate and solve problems in a helpful way.
        </motion.p>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div 
        className="relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Vertical line */}
        <motion.div 
          className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={item}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <motion.div 
              className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 bg-gray-800 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg"
              variants={timelineDot}
              whileHover={{ scale: 1.1, borderColor: "#a855f7" }}
            >
              <img
                src={experience.img}
                alt={experience.company}
                className="w-3/4 h-3/4 object-contain rounded-full"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-lg ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-16`}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(130, 69, 236, 0.4)"
              }}
              style={{
                backdropFilter: "blur(10px)"
              }}
            >
              {/* Flex container for image and text */}
              <div className="flex items-start space-x-6">
                {/* Company Logo/Image */}
                <motion.div 
                  className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden border border-gray-700 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain p-2"
                  />
                </motion.div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-lg text-gray-300 mt-1">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-400 mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {experience.date}
                  </p>
                </div>
              </div>

              <motion.p 
                className="mt-6 text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {experience.desc}
              </motion.p>
              
              <div className="mt-6">
                <h5 className="font-medium text-white mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Technologies Used:
                </h5>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-700"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(130, 69, 236, 0.2)",
                        borderColor: "#8245ec"
                      }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;