import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { motion } from "framer-motion";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const formItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_qwrdaba",  // Replace with your EmailJS Service ID
        "template_roa92df",  // Replace with your EmailJS Template ID
        form.current,
        "oZMQkEXOzvMr22T0k"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-purple-900 rounded-full opacity-10 blur-3xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ delay: 0.4, duration: 1 }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-900 rounded-full opacity-10 blur-3xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ delay: 0.6, duration: 1 }}
      />

      <ToastContainer />

      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        variants={itemVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.p
          className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </motion.p>
      </motion.div>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information */}
        <motion.div
          className="lg:w-2/5"
          variants={itemVariants}
        >
          <motion.h3
            className="text-2xl font-semibold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contact Information
          </motion.h3>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div
              className="flex items-start"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-lg mr-4">
                <FaUser className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium">Name</h4>
                <p className="text-white">Ankit Bhagat</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-lg mr-4">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium">Location</h4>
                <p className="text-white">Bhagwanpur Chowk, Muzaffarpur - 842 001, (Bihar) India</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-lg mr-4">
                <FaPhone className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium">Phone</h4>
                <p className="text-white">+91 7520622129</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-lg mr-4">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm font-medium">Email</h4>
                <p className="text-white">ankitbhagata@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:w-3/5"
          variants={itemVariants}
        >
          <motion.div
            className="bg-gradient-to-br from-[#0d081f] to-[#1a103f] p-8 rounded-xl shadow-2xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-white mb-2 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaPaperPlane className="mr-2 text-purple-400" />
              Send Me a Message
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Fill out the form below and I'll get back to you as soon as possible.
            </motion.p>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={formItemVariants}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 bg-[#131025] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={formItemVariants}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 bg-[#131025] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-[#131025] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-[#131025] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={formItemVariants}
              >
                <motion.button
                  type="submit"
                  className="w-full cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;