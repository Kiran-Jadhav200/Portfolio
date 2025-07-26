import {
  SiTailwindcss,
  SiSpringboot,
  SiGreensock,
  SiVercel,
  SiFigma,
  SiGithub,
  SiReact,
  SiAngular,
  SiJira,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 100, suffix: "%", label: "Passion for Learning" },
  { value: 10, suffix: "+", label: "Technologies Explored" },
  { value: 5, suffix: "+", label: "Personal Projects Completed" },
  { value: 2, suffix: "+", label: "Open Source Contributions" },
];

const logoIconsList = [
  {
    icon: SiReact,
    name: "React",
    type: "icon",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    type: "icon",
  },
  {
    icon: SiTailwindcss,
    name: "TailwindCSS",
    type: "icon",
  },
  {
    icon: SiSpringboot,
    name: "Spring Boot",
    type: "icon",
  },
  {
    icon: SiAngular,
    name: "Angular",
    type: "icon",
  },
  {
    icon: SiJira,
    name: "Jira",
    type: "icon",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    type: "icon",
  },
  {
    icon: FaAws, // Use FaAws from Font Awesome
    name: "AWS",
    type: "icon",
  },
  {
    icon: SiFigma,
    name: "Figma",
    type: "icon",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Quick Learner",
    desc: "Grasps new concepts fast and adapts quickly to challenges.",
  },
];
const techStackImgs = [
  {
    name: "Java Developer",
    imgPath: "/images/logos/Java.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/spring.png",
  },
  {
    name: "Frontend Developer",
    imgPath: "/images/logos/angular.png",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/js.png",
  },
  {
    name: "Cloud",
    imgPath: "/images/logos/cloud.png",
  },
  {
    name: "Databases",
    imgPath: "/images/logos/sql.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Python Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
  {
    name: "Node Js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Github",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Kiran brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer(Internship)",
    date: "May 2025 - Present",
    responsibilities: [
      "Spearheaded a full redesign of xproguard.com using React, TypeScript, Vite & Tailwind CSS from Figma mockups—implementing image lazy-loading and mobile-first styling to boost compile and load times by 30% and cut bounce rate 32%.",
      "Integrated EmailJS for Contact, Support & Careers forms (including PDF resume uploads) routed to respective teams,elevating form completion rates to 66% and eliminating backend dependencies.",
      "Established CI/CD pipelines on AWS Amplify and collaborated with QA via Jira to triage 7–10 bugs per cycle—accelerating staging-to-production lead times by 65% and achieving zero-bug launches.",
      "Developed xproshield.com with React, TypeScript, Tailwind CSS & GSAP animations—led full QA testing and production rollout, resulting in an on-time, flawless launch.",
    ],
  },
  {
    review:
      "I completed a project-based internship at Ernst & Young (EY), where I built a full-stack job portal from scratch. This experience helped me strengthen my skills in modern web development while delivering a real-world solution that improved hiring workflows.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack Developer (Project-Based Internship)",
    date: "Feb 2024 - Apr 2024",
    responsibilities: [
      "Architected and deployed a solo-built job portal using Next.js, React, and MongoDB—leveraging server-side rendering and dynamic interactions to enhance platform performance by 35% and reduce average page load times by 40%.",
      "Elevated HR efficiency by 20% with advanced filtering algorithms and an intuitive Tailwind CSS UI, streamlining candidate screening workflows and cutting time-to-hire from 14 to 11 days.",
      "Independently delivered 8+ feature iterations on a two-week sprint cadence—conducting requirement analysis, planning, development, and QA to ensure 100% alignment with stakeholder expectations.",
      "Automated deployments using Bash scripting and GitHub Actions, reducing manual release steps by 40% and achieving zero production errors throughout the project lifecycle.",
    ],
  },
  {
    review:
      "Kiran's contributions to software and network infrastructure have been exceptional. He demonstrates a strong command over system configuration, database management, and security protocols.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Software & Network Engineer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Configured Milestone VMS (Video Management Software) and thermal camera systems to meet project specifications, ensuring accurate video capture and temperature monitoring.",
      "Implemented the VMS platform end-to-end and integrated it with third-party security systems, demonstrating interoperability across devices.Conducted on-site installs and configuration tasks for CCTV cameras and access control devices under the Milestone framework.",
      "Managed back-end data flows and ensured system reliability during deployment, contributing to a successful, on-time project delivery.",
      "Demonstrated strong self-motivation and software skills, completing all assigned tasks ahead of schedule and exceeding performance expectations.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/kiranjadhav-21"
  },
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/kiran_jadhav_2000/"
  },
  {
    name: "mail",
    imgPath: "/images/mail.png", // Make sure this image exists or add it to your images folder
    link: "mailto:jadhavrkiran22@gmail.com"
  },
  {
    name: "github",
    imgPath: "/images/logos/git.svg", // Use the git.svg as the github icon
    link: "https://github.com/Kiran-Jadhav200"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/KiranJa1000"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
