import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    meta,
    starbucks,
    tesla,
    threejs,
    backend,
    vuejs,
    tic,
    chatter,
    rebuses
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Vue JS Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "vuejs",
      icon: vuejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "OLAK Integrated Services Limited",
      icon: meta,
      iconBg: "#383E56",
      date: "March 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Mentor",
      company_name: "ALTSchool of Africa",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Freelancer | Web Developer",
      company_name: "Upwork",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abdul-Rahmon proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abdul-Rahmon does.",
      name: "David Smith",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Abdul-Rahmon optimized our website, our traffic increased by 50%. We can't thank you enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "Abdul-Rahmon has been managing our company website for years now. He is really good at what he does!",
      name: "Olaegbe Kazeem",
      designation: "CTO",
      company: "OLAK Integrated Services Limited",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ChatterApp",
      description:
        "Embrace the revival of textual richness in a visual-dominated era,where authors and readers unite to celebrate the enduring power of words.",
      tags: [
        {
          name: "VueJS",
          color: "green-pink-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: chatter,
      source_code_link: "https://github.com/Youngtechie/ChatterApp",
      external_link: "https://chatterapp-by-olaegbe.netlify.app/"
    },
    {
      name: "Rebuses Game",
      description:
        " Dive into the enigmatic world of Rebuses, where emojis and texts interwine to spell out captivating puzzles in this web based gaming adventure.",
      tags: [
        {
          name: "ReactJS",
          color: "violet-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
      ],
      image: rebuses,
      source_code_link: "https://github.com/Youngtechie/Rebus-Puzzles_webpage",
      external_link: "https://rebuses.netlify.app/"
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "Elevate the fun of Tic-tac-toe with my interactive web game. Challenge friends and family in this digital twist on the classic Xs and Os.",
      tags: [
        {
          name: "ReactJS",
          color: "violet-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
      ],
      image: tic,
      source_code_link: "https://github.com/Youngtechie/tic-tac-toe",
      external_link: "https://oa-tictactoe.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };