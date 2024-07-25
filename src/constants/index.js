import {
    web,
    frontend,
    business,
    c,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    aicrunch,
    martspec,
    upwork,
    carrent,
    portfolio,
    virus,
    lefthand,
    tripguide,
    threejs,
    jira,
    confluence,
    cpp,
    vladyslav_holub,
    tastycorner,
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
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Business Analyst",
      icon: business,
    },
    {
      title: "C++ Developer",
      icon: c,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "jira",
      icon: jira,
    },
    {
      name: "confluence",
      icon: confluence,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Market Analyst",
      company_name: "aicrunch.io",
      icon: aicrunch,
      iconBg: "#383E56",
      date: "Apr 2024 - Present",
      points: [
        "Writing comprehensive reviews on AI tools.",
        "Performing research on all new AI products, companies, startups, and tools.",
        "Analyzing sources like producthunt.com daily.",
        "Performing analysis of new AI products & tools.",
        "Analyzing UX/UI of the new AI products & tools",
        "Using prompt engineering and tools like custom gpts, reword.com, perplexity.ai",
        "Creating a comprehensive description of new AI products & tools",
        "Performing keyword analysis in Semrush",
        "Collecting and structuring information in Google spreadsheets",
        "Doing the daily analytical reports on the progress",
      ],
    },
    {
      title: "Business Analyst Assistant",
      company_name: "Martspec",
      icon: martspec,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Jan 2024",
      points: [
        "Updating and distributing databases, BI, and reports",
        "Helping set up new analyses and reports",
        "Making presentations to the team summarizing key analyses",
        "Working with other members of the team to understand data analysis requirements and to provide the needed information",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: upwork,
      iconBg: "#383E56",
      date: "Jun 2023 - Aug 2023",
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
        "The integration of 3D models into the site is something incredible. My portfolio looks inspiring. Thanks to Nazarii for the work done.",
      name: "Vladyslav Holub",
      designation: "CEO Assistant & Presales",
      company: "Corpsoft.io",
      image: vladyslav_holub,
    },
  ];
  
  const ready_projects = [
    {
      name: "Portfolio",
      description:
        "Web portfolio with 3d visuals that shows visitors everything about person, it is like new generation of resumes with an attractive shell and fully detailed filling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Virus",
      description:
        "Console c++ game that allows users to get away from routine and just play with ability to break records on local computer.",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
      ],
      image: virus,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tasty Corner",
      description:
        "It is website for small business, where users can get acquainted with restaurant and menu. Clients can contact with cafe throw email and make feedback of this institution.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tastycorner,
      source_code_link: "https://github.com/",
    },
  ];

  const not_ready_projects = [
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "LeftHand",
      description:
        "Social media platform that allows users to share posts, that can be liked, resposted and commented, chat with friends, customize profile, and read news.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: lefthand,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ]
  
  export { services, technologies, experiences, testimonials, ready_projects, not_ready_projects };