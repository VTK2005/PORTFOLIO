// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/download (1).png';
import bsaLogo from './assets/education_logo/download.png';
import vpsLogo from './assets/education_logo/images.jpeg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/finmate.png';
import csprepLogo from './assets/work_logo/healthcare.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
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
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
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
      id: 1,
      img: glaLogo, // You can update this to the VIT-AP logo if available
      school: "VIT-AP University, Amaravati",
      date: "Aug 2023 - May 2027 (Ongoing)",
      grade: "9.28 CGPA: ",
      desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering (B.Tech) at VIT-AP University, Amaravati. The program offers a blend of theoretical foundations and practical applications in areas such as Data Structures, Algorithms, Web Technologies, Database Systems, and Machine Learning. With a focus on innovation and project-based learning, I am continuously gaining hands-on experience by working on real-world technical projects and participating in hackathons and technical clubs.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)"

    },
    {
      id: 2,
      img: bsaLogo,
      school: "Tirumula Junior College, Vizag",
      date: "June 2021 - May 2023",
      grade: "97.8%",
      desc: "I completed my class 12 education from Tirumula Junior College, Vizag, under the Board of Intermediate Education Andhra Pradesh, where I studied Physics, Chemistry, and Mathematics (MPC).",
      degree: "AP Intermediate (XII) - MPC"

    },
    {
      id: 3,
      img: vpsLogo,
      school: "ST CLARET EM HIGH SCHOOL, NARASANNAPETA",
      date: "JUNE 2010 - March 2021",
      grade: "10 GPA",
      desc: "I completed my class 10 education from ST CLARET EM HIGH SCHOOL, NARASANNAPETA, under the AP State Board.",
      degree: "AP State Board (X)"

    },
  ];
  
  export const projects = [
    {
    id: 0,
    title: "FinMate(Finance Tracker)",
    description:
      "Built a full-stack finance tracker for students to manage income, expenses, and budgets. Features include JWT auth, encrypted passwords, interactive dashboards (Recharts), recurring transactions, and dynamic filtering. Stack: React.js, Tailwind CSS, Express.js, MongoDB Atlas.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "express Js", "MongoDb"],
    github: "https://github.com/VTK2005/FINMATE",
    webapp: "https://studysave.netlify.app/",
  },
    {
    id: 1,
    title: "Hospital Management",
    description:
      "MERN stack project enabling hospitals to manage doctor-patient appointments efficiently. Prevents slot clashes with real-time validation. Admins can add doctors and manage their availability. Clean UI for patients to book slots and doctors to view schedules.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "tailwind css",
    ],
    github: "https://github.com/VTK2005/HEALTH-CARE-APPOINMENT-BOOKING",
    webapp: "https://safeslot.netlify.app/",
  },
    
    
  ];  