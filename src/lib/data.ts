import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eshwar_signatures from "@/../public/eshwar_signatures.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experience = [
  {
    title: "B.E. Civil Engineering",
    location: "Chennai, Tamil Nadu",
    description: "Completed my undergrad after studying for 4 years.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Thulasi Enterprises",
    location: "Chennai, Tamil Nadu",
    description:
      "I joined the company in the year 2020 and started my journey as a Technical Sales Representative",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
  {
    title: "Graduated Bootcamp",
    location: "Chennai, Tamil Nadu",
    description:
      "I joined Guvi Zen class in Full Stack Development(MERN Stack), and completed it in 6 months. I started my journey as a freelancer on the side and did a project in Real Estate domain. My Stack includes React, Material UI, Node, Express and MongoDB. I am open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectData = [
  {
    title: "Eshwar Signatures",
    description:
      "Created this Responsive Static Website for my Real Estate client using MERN stack.",
    tags: ["React", "Material UI", "MongoDB", "Node", "Express"],
    imageUrl: eshwar_signatures,
    link: "https://www.eshwarsignatures.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "BootStrap",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Material UI",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "MongoDB",
  "Framer Motion",
] as const;
