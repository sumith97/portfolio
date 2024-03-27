
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
    lexisnexis,
    opentext,
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
      title: "Software Development Intern",
      company_name: "LexisNexis Risk Solutions",
      icon: lexisnexis,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "Responsible for investigating the issues in test automation and fixed 35% of failing testcases in Insurance Market Insights Application.",
        "Worked on writing new API and UI automation test cases for multiple applications using Karate Framework.",
        "Worked on providing appropriate test data to ensure application works as per requirements.",
        "Documented all my investigations and reported the bugs encountered in application to the development team by raising tickets in JIRA.",
        "Created web application using flask framework for team manager to generate custom visualization based on data from JIRA.",
      ],
    },
    {
      title: "Quality Assurance Engineer",
      company_name: "OpenText",
      icon: opentext,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - July 2022",
      points: [
        "Contributed to the planning and documentation of test cases, ensuring thorough verification through agile testing methodologies",
        "Worked extensively on testing API’s and automating about 65% of the total API test cases using Rest-assured framework.",
        "Maintained and automated about 40% of total UI testcases using selenium with cucumber BDD framework.",
        "Automated the performance testing process for the Trading Grid Administration Application, reducing resource needs from 3 team members to 1.",
        "Enhanced application security by performing security testing with Burp Suite, ensuring robust protection against potential vulnerabilities.",
        "Optimized and managed CI/CD pipelines for the regression test suite, guaranteeing consistent and efficient execution of regression testing.",
        "Ensured the functionalities of the product is properly documented in confluence and took part in giving demos to end users and taking their feedback for improvement.",
        "Types of Testing done: Fuzzy Testing, Functional Testing, Regression Testing, End-to-End Testing and Manual Exploratory Testing.",
      ],
    },
    {
      title: "Engineering Intern",
      company_name: "OpenText",
      icon: opentext,
      iconBg: "#E6DEDD",
      date: "May 2019 - Jan 2020",
      points: [
        "Worked on OpenText Magellan Text Mining Application in developer team, completed the task to improve the performance of data extraction.",
        "Worked on OpenText eDOCS android application in Quality Assurance team, automated about 20% of total UI Test Cases using Appium",
        "Documented the functionality in confluence and supported technical help for the end user.",
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