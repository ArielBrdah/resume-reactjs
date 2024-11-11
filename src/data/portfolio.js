const about = {
  title: "Hi 👋 , I am ",
  name: "Ariel Berdah",
  description:
    "I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in various technologies and enjoy tackling complex challenges.",
  github: "https://github.com/ArielBrdah", 
  linkedin: "https://www.linkedin.com/in/arielcberdah/", 
cv: "https://drive.google.com/file/d/1ZECXMUnL9khbc1CQw4o1xaTBlUvKz_Px/view?usp=sharing",
};

const projects = {
  title: "Projects",
  personalProjects: [
      {
      title: "Signature App",
      short: "Features digital signature management and CRM functionalities.",
      description:
        "This application allows users to manage digital signatures and offers CRM functionalities for better organization.",
      technologies: ["#CSS", "#JavaScript", "#Laravel", "#MySQL"],
      github: "aurasign.fr",
      demo: "https://aurasign.fr",
    },
      {
      title: "Coupon System",
      short: "A Java J2EE application similar to Groupon.",
      description:
        "This application allows users to browse, purchase, and manage various coupons and discounts, providing a user-friendly interface and efficient backend processing.",
      technologies: ["#Java", "#J2EE", "#Servlets", "#MySQL", "#CSS"],
      github: "https://github.com/ArielBrdah/coupon-system-java", 
      demo: "https://github.com/ArielBrdah/coupon-system-java", 
    },
    {
      title: "Dictionary Web App",
      short: "A web application for word definitions and synonyms.",
      description:
        "This application allows users to search for words and retrieve definitions, synonyms, and related information, offering an intuitive interface and fast responses.",
      technologies: ["#Bootstrap", "#JavaScript", "#Node.js", "#React.js"],
      github: "https://github.com/ArielBrdah/dictionary-webapp-react",
      demo: "https://arielbrdah.github.io/dictionary-webapp-react",
    },
       {
      title: "Quiz App",
      short: "An interactive quiz application built with React.",
      description:
        "This application allows users to take quizzes on various topics, track their scores, and view correct answers, all within a user-friendly interface.",
      technologies: ["#React.js", "#JavaScript", "#CSS"],
      github: "https://github.com/ArielBrdah/quiz-react-app", 
      demo: "https://quiz-react-webapp.netlify.app", 
    },
    
      {
      title: "Dessert Ordering App",
      short: "An application for ordering desserts online.",
      description:
        "This app allows users to browse a variety of desserts, place orders, and track them in real-time. It features a clean UI, secure payment integration, and user-friendly ordering flow.",
      technologies: ["#React.js", "#Node.js",],
      github: "https://github.com/ArielBrdah/desserts-page", 
      demo: "https://arielbrdah.github.io/desserts-page", 
    },
     {
      title: "Snake Game",
      short: "A classic Snake game built using JavaScript.",
      description:
        "This is a recreation of the classic Snake game where users control a snake to eat food and grow, without hitting the walls or themselves. The game features a responsive design, real-time score tracking, and increasing difficulty.",
      technologies: ["#JavaScript", "#HTML", "#CSS"],
      github: "https://github.com/ArielBrdah/snake-game-js", 
      demo: "https://arielbrdah.github.io/snake-game-js", 
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Full Stack Developer",
      company: "ADOPT, Netanya",
      duration: "2024",
      description:
        "Integrated new clients into a 'lead sales and purchases' system. Developed several features to better handle trading and redesigned the CRM for a more intuitive user experience. Worked on a Dashboard for partners and clients to track activities, profits, and losses on leads.",
      technologies: ["#PHP", "#Laravel", "#MySQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Aurasoft, Netanya",
      duration: "2022 - 2023",
      description:
        "Developed an electronic signature application similar to Yousign, featuring a CRM for managing signatures, used internally and as a SaaS. Revamped an insurance subscription application, enhancing the design and adding new features. Contributed to a SaaS application and system design."
        ,
      technologies: ["#PHP", "#Laravel", "#MySQL", "#NextJS", "#TailwindCSS"],
    },
    {
      title: "Full Stack Developer",
      company: "Nerd148, Netanya",
      duration: "2021 - 2022",
      description:
        "Built websites and landing pages for marketing. Developed an accounting management application. Contributed to the development of a cryptocurrency (NFT) application, performed code reviews on the backend, and set up CI/CD pipelines.",
      technologies: ["#NodeJS", "#React.js", "#MySQL", "#WordPress"],
    },
  ],
};


const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "#HTML",
        "#CSS",
        "#JavaScript",
        "#TypeScript",
        "#React.js",
        "#Next.js",
        "#Node.js",
        "#Express.js",
        "#Laravel",
        "#PHP",
        "#Java",
        "#J2EE",
        "#Servlets",
        "#TailwindCSS",
        "#Bootstrap"
      ],
    },
    {
      title: "Databases",
      skills: ["#MongoDB", "#MySQL"],
    },
    {
      title: "Others",
      skills: ["#Git", "#Jest", "#CI/CD", "#Figma", "#Docker"],
    },
  ],
};

export { about, projects, experience, skills };
