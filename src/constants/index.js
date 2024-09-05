
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
    hdd,
    per1,
    per2,
    per3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Development",
      icon: backend,
    },
    {
      title: "QA/Test Automation",
      icon: mobile,
    },
    {
      title: "Cloud Technologies",
      icon: web,
    },
    {
      title: "Data Science",
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
      "Sumith is a highly motivated, hard-working employee with a desire to excel. I have had the pleasure of getting to know and work with him as his manager for around 2 years at OpenText until I moved to PayPal",
      name: "Jyosthna Yellampalli",
      designation: "Manager",
      company: "OpenText",
      image: per1,
    },
    {
      testimonial:
      "Sumith is highly dedicated and sincere to the team at times he workover hours to get the things done on priority, one such example is he supported Disaster Recovery testing during late hours at night.",
      name: "Navik Bhandari",
      designation: "Principal Quality Asurance Engineer",
      company: "OpenText",
      image: per2,
    },
    {
      testimonial:
        "Sumith played key role in identifying issues in the Trading Grid Application. Also helped reducing manual effort by automating the key features related to application.",
      name: "Monika",
      designation: "Senior Software Engineer",
      company: "OpenText",
      image: per3,
    },
  ];
  
  const projects = [
    {
      name: "Forensic Analysis of Android Privacy Browser",
      description:
        "Forensic analysis of various Android privacy browsers to verify their privacy levels by recovering user artifacts. The analysis involved extracting user data after the browsers were closed. Written python scripts to parse through data generated by forensic tools to get meaningful insights from artifacts.",
      tags: [
        {
          name: "Application Security",
          color: "pink-text-gradient",
        },
        {
          name: "Autopsy",
          color: "blue-text-gradient",
        },
        {
          name: "Bulk Load Extractor",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: aifairness,
      source_code_link: "https://github.com/sumith97/Forensic-Analysis-of-Android-Privacy-Browser",
    },
    {
      name: "New York City Crime Insights",
      description:
        "A web application built on the Flask framework that delivers graphical insights derived from complex SQL queries on data sourced from various official government records",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "plotly",
          color: "pink-text-gradient",
        },
        {
          name: "Oracle Database",
          color: "blue-text-gradient",
        },
      ],
      image: shifttoapp,
      source_code_link: "https://github.com/SreeramAditya/NYC-Crime-Insights",
    },
    {
      name: "Kubernetes Cluster Controller",
      description:
        "This project implements a Global Controller based on feedback system for managing nodes within a Kubernetes cluster environment. The controller's primary objective is to optimize resource utilization by ensuring overall CPU usage stays below 80%, while efficiently allocating jobs across nodes.",
      tags: [
        {
          name: "Kubernetes",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "Cloud Computing Technology",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: passwordstrength,
      source_code_link: "https://github.com/gowdajotsna/LocalController",
    },
    {
      name: "Summer Internship Report",
      description:
        "Final Presentation on the work done during Summer Internship at LexisNexis Risk Solutions",
      tags: [
        {
          name: "Software Quality Assurance",
          color: "blue-text-gradient",
        },
        {
          name: "Test Automation",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        {
          name: "Karate Framework",
          color: "blue-text-gradient",
        },
      ],
      image: vidtour,
      source_code_link: "https://drive.google.com/file/d/1yzCUW9gwl0hmSn-2uWADkEaR928bDidM/view?usp=sharing",
    },
    {
      name: "Security Surveillance with Machine Learning",
      description:
        "Created an interactive web application for end remote users to keep track of people detected by the system. The primary emphasis of this project is based on architecture and have published an article in an international journal",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Facial Recogninition",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "Flask Framework",
          color: "blue-text-gradient",
        },
      ],
      image: socceranalysis,
      source_code_link: "https://www.ijariit.com/manuscripts/v5i3/V5I3-1322.pdf",
    },
    {
      name: "Hard Disk Drive Acoustic Injection Simulation in Air",
      description:
        "Through COMSOL simulations and comprehensive analysis, this project presents our findings, offering insights into the extent of damage that acoustic injection can inflict on HDDs under various conditions.",
      tags: [
        {
          name: "Information Security",
          color: "blue-text-gradient",
        },
        {
          name: "COMSOL",
          color: "green-text-gradient",
        },
        {
          name: "Storage Systems",
          color: "pink-text-gradient",
        },
        {
          name: "Risk Analysis",
          color: "blue-text-gradient",
        },
      ],
      image: hdd,
      source_code_link: "https://drive.google.com/file/d/1HYznlRbLZ6IzatN4yREbwwz0bgahLGXz/view?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };