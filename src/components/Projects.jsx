import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

// Variants for the section title animation
const sectionTitleVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

// Variants for the project item animation
const projectItemVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      delay: 0.1 * index,
    }
  }),
  whileHover: {
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(130, 69, 236, 0.4)",
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
};

// Variants for the modal animation
const modalVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Variants for the view more button
const viewMoreVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.4
    }
  },
  whileHover: {
    scale: 1.05,
    backgroundColor: "rgba(124, 58, 237, 0.9)",
    boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.5)",
    transition: { duration: 0.3 }
  },
  whileTap: { scale: 0.98 }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const handleViewMore = () => {
    window.open("https://coderakproject.ccbp.tech/", "_blank");
  };

  return (
    <motion.section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 font-sans relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" } }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={sectionTitleVariants}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            RECENT <span className="text-purple-500">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border border-gray-800 bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-purple-500/50"
              variants={projectItemVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              custom={index}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-800 text-xs sm:text-sm font-medium text-purple-400 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          className="mt-16 sm:mt-20 flex justify-center"
          variants={viewMoreVariants}
          initial="initial"
          animate="animate"
          whileTap="whileTap"
        >
          <button
            onClick={handleViewMore}
            className="px-8 py-3 sm:px-10 sm:py-4  text-amber-500 font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:text-blue-500 cursor-pointer"
          >
            <span className="text-lg sm:text-xl">View More Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>

        {/* Modal Container */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-gray-800">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-white text-3xl font-bold transition-colors duration-200 z-10"
              >
                &times;
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 bg-gray-800 p-4 flex items-center justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-80 lg:max-h-full object-contain rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-xs sm:text-sm font-medium text-purple-400 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium text-center transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;