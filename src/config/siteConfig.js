/**
 * siteConfig.js
 * -----------------------------------------------------------------------
 * This is the ONLY file you should need to edit to make this portfolio
 * yours. Every section (Hero, About, Skills, Projects, Experience,
 * Contact) reads its content from this object — no hardcoded copy is
 * scattered across components.
 *
 * Replace the placeholder values below with your real information.
 * -----------------------------------------------------------------------
 */

import IMG1 from "../assets/img/279862710-f0db01a6-9e4a-461c-ba7.jpg";
import IMG2 from "../assets/img/madious1.png";
import IMG3 from "../assets/img/repliq.png";
import IMG4 from "../assets/img/lws.png";
import IMG5 from "../assets/img/technext.png";
import IMG6 from "../assets/img/khuda-lagse.png";
import IMG7 from "../assets/img/Gadget_lagbe.png";
import IMG8 from "../assets/img/Feedback.png";
import IMG9 from "../assets/img/my-todo.png";
import IMG10 from "../assets/img/Screenshot From 2026-08-17 14-35-44.png";
import IMG11 from "../assets/img/Screenshot From 2026-08-17 14-35-55.png";
import resume from "../assets/Mohammad Ismail Alam.pdf";
import profileImage from "../assets/img/WhatsApp Image 2026-08-16 at 10.37.47 PM.jpeg";

export const siteConfig = {
  meta: {
    title: "Mohammad Ismail Alam · Portfolio",
    description:
      "Portfolio of Mohammad Ismail Alam — Front-end Developer. Projects, skills, and experience.",
  },

  personal: {
    name: "Mohammad Ismail Alam",
    role: "Front-end Developer",
    roles: [
      "Front-end Developer",
      "Develop web-sites using React",
      "Learner",
      // "Open-Source Contributor"
    ],
    location: "Dhaka, Bangladesh",
    email: "ismailalam901@gmail.com",
    resumeUrl: resume,
    available: true,
    bio: "Frontend developer specializing in TypeScript, React, with a strong passion for creating high-quality, user-friendly applications. Experienced in building fast, interactive, and responsive interfaces, working in team environments, utilizing Git and Jira. Eager to contribute to team success while continuously expanding my skill set.",
    focus: [
      "Building reusable, component-driven UIs",
      "Writing custom hooks instead of copy-pasting logic",
      "Turning designs into performant, accessible interfaces",
    ],
    profileImage: profileImage,
  },

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/MohammadIsmailAlam",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-ismail-alam/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:ismailalam901@gmail.com", icon: "mail" },
  ],

  nav: [
    { id: "about", label: "about.jsx" },
    { id: "experience", label: "experience.log" },
    { id: "skills", label: "skills.json" },
    { id: "projects", label: "projects.map()" },
    { id: "contact", label: "contact.sh" },
  ],

  experience: [
    {
      date: "01/06/2024 – Current",
      tag: "feat",
      title: "JR. SOFTWARE ENGINEER",
      org: "MINISTRY OF PUBLIC ADMINISTRATION",
      description: `• Built pixel-perfect, responsive, and accessible user interfaces across large-scale React applications.
    
        • Improved performance by achieving 90% Core Web Vitals, reducing bundle size by ~40%, optimizing load time, and UI interactions.
    
        • Reduced development time by 25% by creating reusable React components and modular form structures.
    
        • Reduced load time by 60% through lazy loading and reduced bundle size.
    
        • Optimized API integration by aligning contracts with backend teams, cutting integration errors by 35%.
    
        • Delivered pixel-perfect, responsive UIs by converting Figma designs to code with Bootstrap/CSS, achieving a 100% stakeholder satisfaction rate.
    
        • Supported nationwide deployment through technical documentation, user training, and iterative feedback for 5,000+ users.`,
    },
    {
      date: "01/09/2022 – 30/06/2024",
      tag: "feat",
      title: "GRADUATE SOFTWARE ENGINEER",
      org: "KONA SOFTWARE LAB LIMITED",
      description: `• Translated Figma design into pixel-perfect, responsive templates using HTML, CSS, and JavaScript.

      • Implemented front-end changes based on client and team requests.

      • Fixed iOS mobile web bugs in a React app by isolating platform-specific issues, reducing user-reported errors
              by 30%.

      • Part of manual testing of the application before every sprint release.

      • Built responsive UIs in React using CSS Flexbox and media queries, improving mobile usability scores by 40%.

      • Independently developed a complete management system, handling all aspects from design to deployment.`,
    },
    // {
    //   date: "2024",
    //   tag: "chore",
    //   title: "Started Learning Web Development",
    //   org: "Self-taught / Bootcamp / University",
    //   description: "Where your journey into development began.",
    // },
  ],

  skills: [
    {
      category: "Programming Language ",
      file: "Language",
      items: ["JavaScript", "TypeScript"],
    },
    {
      category: "Libraries & Framworks",
      file: "Libraries & Framworks",
      items: ["React", "NextJs", "Bootstrap", "Tailwind CSS", "Material UI"],
    },
    {
      category: "Tools & Platforms",
      file: "Tools & Platforms",
      items: [
        "Git/Github",
        "Gitlab",
        "Docker",
        "Postman",
        "Jira",
        "Jenkins",
        "Figma (Base)",
        "Firebase",
        "Vercel",
      ],
    },

    {
      category: "Features",
      file: "Features",
      items: [
        "Custom Hooks",
        "Context API",
        "Forward Refs",
        "Higher-Order Components",
        "React Suspense",
        "React Lazy",
        "Error Boundaries",
        "UseMemo",
        "useCallBack",
        " Code Spliting",
        "Dynamic Forms",
      ],
    },
  ],

  projects: [
    {
      id: "proj-1",
      name: "Government Employee Management System, (Gems)",
      description: `GEMS is a centralized digital platform for managing the lifecycle and administrative information of Bangladesh Government employees.
       
      Modules I contributed to and developed:
        • ACR (Annual Confidential Reports)
        • PMS (Performance Management System)
        • Meeting Minutes
        • Facility Service
        • Welfare
        • Pension & PRL
        • Home
        • APS/DMS (Approval Processing System)
        • OMS (Organization Management System)
        • EMS (Employee Management System)`,
      stack: ["React", "Bootstrap", "pdk maker"],
      // repoUrl: "https://github.com/MohammadIsmailAlam",
      // liveUrl: "https://example.com",
      featured: true,
    },
    {
      id: "proj-2",
      name: "Cryptrade, Cryptocurrency Trading Platform",
      description:
        "Cryptrade is a trading platform focusing exclusively on cryptocurrency trading, representing what you can trade on a crypto exchange",
      stack: ["React", "React-Hook-Form", "Bootstrap"],
      // repoUrl: "https://github.com/MohammadIsmailAlam",
      // liveUrl: "",
      featured: true,
    },
    {
      id: "proj-3",
      name: "Gadget Lagbe, E-commerce Website",
      description:
        "Developed a user-friendly E-commerce Shopping Website with responsive design and product catalog management,demonstrating proficiency in front-end development.",
      stack: ["React", "Boostrap", "Material UI", "Tailwind"],
      // repoUrl: "https://github.com/MohammadIsmailAlam",
      // liveUrl: "https://example.com",
      featured: false,
    },
  ],

  extraWorks: [
    {
      id: 1,
      name: "Ollyo Coding Test",
      image: IMG1,
      stack: [],
      description:
        "Responsive image gallery using React JS with reordering, deleting multiple images, and setting a feature image.",
      tech: "React | Tailwind CSS | React Hook Form",
      liveUrl: "https://ollyo-gallery.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/ollyo-task",
    },

    {
      id: 2,
      name: "Mediusware Coding Test",
      image: IMG2,
      description:
        "Two-part application involving a TODO implementation and API data fetching according to the provided requirements.",
      tech: "React | Material UI | Bootstrap | React Router | React Hook Form",
      liveUrl: "https://khuda-lagse.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/Mediusware-codingTest",
    },

    {
      id: 3,
      name: "Reqile Coding Test",
      image: IMG3,
      description:
        "E-commerce admin interface with cart functionality, including adding and removing items.",
      tech: "React | Tailwind CSS",
      liveUrl: "https://reqile-coding-test.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/Reqile-Coding-Test",
    },

    {
      id: 4,
      name: "Learn With Sumit Coding Test",
      image: IMG4,
      description: "URL shortening web application.",
      tech: "React | React Hooks | Tailwind CSS",
      liveUrl: "https://lws-url-shortener-task.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/LWS_url-shortener_task",
    },

    {
      id: 5,
      name: "Technext Coding Test",
      image: IMG5,
      description:
        "Fetched data from an API with search and sorting functionality based on date, success, and failure.",
      tech: "React | React Hooks | Context | React State",
      liveUrl: "https://technext-test.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/Technext-test",
    },
  ],

  soloProjects: [
    {
      id: 1,
      name: "Product Managment",
      image: IMG10,
      description:
        "A treat-giving website and interactive platform for presenting various treats to users.",
      stack: [
        "React",
        "TypeScriot",
        "Material UI",
        "Bootstrap",
        "React Router",
        "React Hook Form",
      ],
      // liveUrl: "https://khuda-lagse.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/productList",
    },
    {
      id: 2,
      name: "Khuda-lagse",
      image: IMG6,
      description:
        "A treat-giving website and interactive platform for presenting various treats to users.",
      stack: [
        "HTML",
        "CSS",
        "React",
        "Material UI",
        "Bootstrap",
        "React Router",
        "React Hook Form",
      ],
      liveUrl: "https://khuda-lagse.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/Treat-Managment-System",
    },

    {
      id: 2,
      name: "Gadget Lagbe",
      image: IMG7,
      description:
        "An innovative e-commerce website for gadgets, offering a wide range of cutting-edge products and an intuitive shopping experience.",
      stack: ["React", "Tailwind CSS", "React Router", "React Icons"],
      liveUrl: "https://gadget-lagbe.vercel.app/",
      repoUrl:
        "https://github.com/MohammadIsmailAlam/Ecommerec-Shoping-Website",
    },

    {
      id: 3,
      name: "FeedBack Plot App",
      image: IMG8,
      description:
        "A social-media-style platform where users can collect and share feedback.",
      stack: ["React", "Redux"],
      liveUrl: "https://react-redux-project-sage.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/react-redux-project",
    },

    {
      id: 4,
      name: "My TO-DO List",
      image: IMG9,
      description:
        "A simple task management application for creating, storing, and remembering tasks.",
      stack: ["JavaScript"],
      liveUrl: "https://my-todo-app-list.vercel.app/",
      repoUrl: "https://github.com/MohammadIsmailAlam/my-todo-app",
    },
  ],

  contact: {
    heading: "Let's build something.",
    body: "Open to new opportunities and interesting projects. The fastest way to reach me is email.",
  },
};
