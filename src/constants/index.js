
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    capgemini,
    ic3,
    ufhealth,
    angul,
    jav,
    python,
    vscode,
    biosample,
    socceranalysis,
    vidtour,
    aifairness,
    passwordstrength,
    shifttoapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "ML/Data Analysis",
      icon: mobile,
    },
    {
      title: " Angular/React Developer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: jav,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "angular",
      icon: angul,
    },
    {
      name: "VS Code",
      icon: vscode,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Engineer Intern",
      company_name: "Capgemini Technological Services",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Jan 2021 - May 2021",
      points: [
        "Teamed up to conceptualize and deliver an innovative Online Dry Cleaning web application using Angular, resulting in a visually appealing and user-friendly interface.",
        "Leveraged full-stack technologies including Core Java, AngularJS, SQL, and REST APIs alongside HTML, CSS, JavaScript, and Spring framework to develop an interactive online dry cleaning web application.",
        "Managed robust databases, handling 5000+ customer records, and incorporated REST APIs using Java and Spring Boot for seamless integration with web services.",
        "Directed the development of a mobile-responsive design using CSS, HTML, and Angular, elevating the user experience and ensuring seamless application performance across diverse devices.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Capgemini Technological Services",
      icon: capgemini,
      iconBg: "#E6DEDD",
      date: "June 2021 - July 2022",
      points: [
        "Contributed to optimizing the Guidewire Policy-center using GoSu, enhancing efficiency by 12%, and participated in upgrading the Claim-center from V9 to V10, including writing and testing end-to-end cases.",
        "Collaborated with developers and QA teams to optimize Guidewire applications within Agile DevOps environments, focusing on seamless deployments and enhancing the capabilities of Guidewire Policy and ClaimCenter.",
        "Executed a pivotal role as a team member by adhering to agile methodologies across 3 projects, addressing over 50 configuration issues, which resulted in a 10% increase in client satisfaction.",
        "Demonstrated teamwork through 12 impactful demos, fostering Agile collaboration and showcasing project progress.",
      ],
    },
    {
      title: "Graduate Research Assistant & Backend Developer",
      company_name: "Intelligent Critical Care Center (IC3) - UF Health",
      icon: ufhealth,
      iconBg: "#E6DEDD",
      date: "May 2023 - November 2023",
      points: [
        "I have extensively explored current fairness tools, such as IBM's AIF360, Microsoft's Fairlearn, and Google's Fairness Indicators, among others, to deepen my comprehension of bias and fairness within ML models.",
        "Conducted a thorough research, analyzing publications on statistical methodologies and matrix frameworks for assessing performance, privacy, explainability, and bias in Machine Learning models.",
        "Implemented Python Code for statistical methods and matrices, enabling effective evaluation of model performance, and fairness while ensuring data privacy compliance.",
        "Launched a robust, scalable application using the MERN stack, streamlining the management of biological samples, resulting error reduction and increase in data accuracy.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      company_name: "Norman Fixel Institute for Neurological Diseses - UF Health",
      icon: ufhealth,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Working on the Project: Brain Recording Analysis and Visualization Online (BRAVO) - A visualization tool for deep brain stimulation data.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "Arun demonstrates a strong commitment to clean and efficient code. Improving code readability by adding more comments and adhering to coding standards could further enhance his contributions.",
      name: "Manoj Kumar Donthireddy",
      designation: "Senior Software Engineer",
      company: "Capgemini Technological Services",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      testimonial:
      "Arun's innovative solutions to complex problems are commendable. Focusing on the scalability and maintainability of these solutions could ensure their long-term effectiveness and ease of future modifications.",
      name: "Raghu Ram Reddy Gayam",
      designation: "Software Engineer",
      company: "FIS Global",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      testimonial:
        "Arun's productivity on individual tasks is impressive, and his potential to enhance project success through more proactive communication and active participation in code reviews is promising. His engagement with the team can further amplify the achievements.",
      name: "Pranathi Boyina",
      designation: "Senior Software Engineer",
      company: "Capgemini Technological Services",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      testimonial:
        "Arun quickly masters new skills with remarkable dedication. His enthusiasm for learning and growth stands out, making him a valuable asset in any endeavor.",
      name: "Harshith Kasireddy",
      designation: "Team Member",
      company: "College's Major Project",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ShifttoApp",
      description:
        "Shift2App is a tool that streamlines the process of converting your responsive web app into native Android and iOS applications.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Ruby",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
      ],
      image: shifttoapp,
      source_code_link: "https://github.com/aunnagiri9/ShifttoApp",
    },
    {
      name: "AI Bias & Fairness",
      description:
        "This document provides info on AI Bias Fairness Metrics on AIF360. Currently Working on gathering information on other vailable tools like Microsoft Fair Learn, Google What-If Tool, Aequitas etc ",
      tags: [
        {
          name: "MachineLearningModels",
          color: "pink-text-gradient",
        },
        {
          name: "ArtificialIntelligence",
          color: "blue-text-gradient",
        },
        {
          name: "MLAlgorithms",
          color: "green-text-gradient",
        },
        {
          name: "Datasets",
          color: "pink-text-gradient",
        },
      ],
      image: aifairness,
      source_code_link: "https://github.com/aunnagiri9/PasswordStrength",
    },
    {
      name: "Password Strength",
      description:
        "This project Leverages Machine Learning algorithms such as Naive Bayes, Logistic Regression, Random Forest, Neural Network, and Decision Tree, we can analyze password strength to facilitate a multifaceted defense against password breaches and provide a highly secure environment.",
      tags: [
        {
          name: "MachineLearning",
          color: "pink-text-gradient",
        },
        {
          name: "JupyterNotebook",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: passwordstrength,
      source_code_link: "https://github.com/aunnagiri9/PasswordStrength",
    },
    {
      name: "VidTour",
      description:
        "VidTour is an innovative application designed to provide video analysis for users based on the YT Link provided. It simplifies the process of summarizing and extracting key points from both long and short videos using Google's Gen AI.",
      tags: [
        {
          name: "ArtificialIntelligence",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleGenAI",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: vidtour,
      source_code_link: "https://github.com/aunnagiri9/VidTour",
    },
    {
      name: "Soccer Analysis",
      description:
        "Developed a cutting-edge web application leveraging Chart.js, React.js, and Node.js for soccer data analysis, utilizing over a million records and advanced RDBMS queries to uncover and visualize key trends in player valuations and game statistics.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "chartjs",
          color: "pink-text-gradient",
        },
        {
          name: "dataanalysis",
          color: "blue-text-gradient",
        },
      ],
      image: socceranalysis,
      source_code_link: "https://github.com/aunnagiri9/VidTour",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };