import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "opex",
    company: "OPEX Consulting Ltd",
    role: "Software Engineer",
    employmentType: "Full-time",
    location: "Nigeria",
    startDate: "Jul 2025",
    endDate: "Present",
    description:
      "Full-stack software engineering across enterprise platforms, with responsibility spanning frontend development, backend services, API integration, business workflows, and production feature delivery.",
    responsibilities: [
      "Designed and built enterprise logistics workflows across the Admin, Logistics, and Farmer portals of the PLACOM platform, a system commissioned by a Nigerian state government and now used by 10,000+ registered farmers, hundreds of admin users, and multiple logistics companies.",
      "Developed backend services and business logic for the Imo-Ohuru Farmer Platform (Diopalm) using NestJS and MongoDB, supporting an organization-run program serving hundreds of palm tree farmers.",
      "Converted Figma designs into production-ready, reusable React components across enterprise web applications.",
      "Implemented multilingual support across the RegWatch platform using React, TypeScript, and react-i18next, enabling the interface to support multiple languages.",
      "Integrated RESTful APIs between frontend and backend systems and worked with backend services where necessary to support frontend functionality and product requirements.",
      "Worked closely with product managers, designers, and fellow engineers through Agile sprints, code reviews, debugging, and feature delivery.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "i18next",
      "Git",
    ],
    current: true,
  },

  {
    id: "peace-house",
    company: "Peace House ICT & Tech Department",
    role: "Software Developer (Intern)",
    employmentType: "Internship",
    location: "Nigeria",
    startDate: "2024",
    endDate: "2025",
    description:
      "One-year software development internship focused on building internal organizational systems and developing practical experience across frontend, backend, and full-stack application development.",
    responsibilities: [
      "Designed, built, and deployed a Conference Room Booking System to support internal organizational operations.",
      "Designed, built, and deployed an Online Bookstore Platform supporting book browsing, ordering, and administrative workflows.",
      "Collaborated with stakeholders to translate business requirements into working software solutions.",
      "Maintained and enhanced existing systems to improve usability, functionality, and performance.",
      "Used personal time during the internship to design and ship additional self-initiated platforms, building the portfolio that led directly to a full-time software engineering opportunity at OPEX Consulting Ltd.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Git",
    ],
    current: false,
  },

  {
    id: "ministry",
    company: "Ministry of Information and Strategy",
    role: "Junior Staff",
    employmentType: "Full-time",
    location: "Nigeria",
    startDate: "2023",
    endDate: "2024",
    description:
      "Provided ICT and administrative technology support while gaining practical exposure to network infrastructure, server configuration, and organizational technology operations.",
    responsibilities: [
      "Assisted in ICT operations and administrative technology support across the organization.",
      "Collaborated with telecommunications personnel during network infrastructure deployment.",
      "Supported server configuration and basic infrastructure setup activities.",
      "Supported LAN configuration and troubleshooting activities.",
    ],
    technologies: [
      "LAN",
      "Networking",
      "Server Configuration",
      "ICT Support",
    ],
    current: false,
  },

  {
    id: "incubators",
    company: "Incubators Group of Schools",
    role: "Mathematics Instructor",
    employmentType: "Full-time",
    location: "Nigeria",
    startDate: "2022",
    endDate: "2022",
    description:
      "Taught Mathematics using practical and problem-solving approaches, with an emphasis on analytical thinking and structured reasoning.",
    responsibilities: [
      "Taught Mathematics using practical, problem-solving methods to strengthen students' analytical thinking.",
      "Encouraged project-based learning and structured problem-solving approaches in the classroom.",
      "Developed lessons that encouraged students to approach complex problems systematically.",
    ],
    technologies: [
      "Mathematics",
      "Problem Solving",
      "Project-Based Learning",
    ],
    current: false,
  },
];