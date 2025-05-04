// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import lnmcbm from './assets/company_logo/lnmcbm.jpeg'

// Education Section Logo's
import jpschool from './assets/education_logo/jpschool.png'
import lnmcbmcollege from './assets/education_logo/lnmcbmcollege.jpeg'
import navrastraschool from './assets/education_logo/navrastraschool.png'
import nxtwave from './assets/education_logo/nxtwave-learing.jpg'


// Project Section Logo's
import jobs from './assets/work_logo/jobs-entry.png';
import freecourses from './assets/work_logo/free-courses.png';
import foodmunch from './assets/work_logo/food-munch.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: lnmcbm,
      role: "Frontend Intern",
      company: "LNMCBM",
      date: "September 2023 - January 2024",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: nxtwave,
      school: "Nxtwave Disruptive Technologies ",
      date: "Nov 2023 - Ongoing",
      grade: "93.7%",
      desc: "Learned and proficient in a range of front-end technologies including HTML, CSS, JavaScript, React, NextJS, Bootstrap, and Redux, as well as back-end technologies such as Node.js, Express.js, MongoDB, and Firebase. Developed multiple industry-level projects, demonstrating practical application of these skills and a strong understanding of full-stack development principles.",
      degree: "Industry Ready Certification in Full-stack Development",
    },
    {
      id: 0,
      img: lnmcbmcollege,
      school: "L.N Mishra College, Muzaffarpur",
      date: "Aug 2022 - Ongoing",
      grade: "75.2%",
      desc: "A highly motivated and skilled individual with a Bachelor of Computer Applications degree. Proven ability to apply theoretical knowledge in practical scenarios, with a strong foundation in software development, database management, and web technologies. Eager to contribute technical expertise and a passion for innovation to a dynamic professional environment.",
      degree: "Bachelor of Computer Applications (BCA)",
    },
    {
      id: 1,
      img: jpschool,
      school: "J.P. +2 High School, Bhagwanpur, Muzaffarpur",
      date: "Apr 2021 - March 2022",
      grade: "57.4%",
      desc: "Completed Class XII with a focus on Physics, Chemistry, and Mathematics.",
      degree: "CBSE (XII) - Physics, Chemistry, Mathematics",
    },
    {
      id: 2,
      img: navrastraschool,
      school: "Navrashtra Vidyalaya Patahi Hight School, Muzaffarpur",
      date: "Apr 2019 - March 2020",
      grade: "56.4%",
      desc: "Completed Class X with a focus on Science.",
      degree: "CBSE (X) - Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Jobs Entry",
      description:
        "Developed a free job application platform utilizing HTML, CSS, JavaScript, and React JS, enhanced with API integration and Bootstrap for responsive design. This project enables users to seamlessly browse and apply for job opportunities without any extra costs, streamlining the job search process.",
      image: jobs,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Bootstrap"],
      github: "https://github.com/Whiteak007/Job-Entry-Website",
      webapp: "https://whiteak007.github.io/Job-Entry-Website/index.html",
    },
    {
      id: 1,
      title: "Free Courses",
      description:
        "Constructed a comprehensive learning platform offering free courses for all skill levels. Built with React JS, Node.js, MongoDB, Express, HTML, CSS, and JavaScript, the site provides valuable educational resources, empowering users to expand their knowledge in various programming domains.",
      image: freecourses,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Whiteak007?tab=repositories",
      webapp: "https://whiteak007.github.io/learn-programming-with-us/",
    },
    {
      id: 2,
      title: "Food Munch",
      description:
        "Created a recipe application showcasing original and classic food recipes using React JS, API integration, HTML, CSS, and JavaScript. This project delivers a user-friendly interface to explore diverse culinary delights and discover new cooking ideas with ease.",
      image: foodmunch,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Whiteak007?tab=repositories",
      webapp: "https://coderakfood.ccbp.tech/",
    },
  ];