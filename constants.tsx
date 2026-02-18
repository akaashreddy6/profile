
import React from 'react';
import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Alex Thorne",
  title: "Senior Full-Stack & AI Engineer",
  bio: "Architecting the future with scalable React systems and cutting-edge generative AI integrations. 8+ years of experience in building high-performance web applications.",
  location: "San Francisco, CA",
  email: "alex.thorne@example.com",
  github: "github.com/alexthorne",
  linkedin: "linkedin.com/in/alexthorne"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "NeuroVision AI",
    description: "Real-time object detection and scene analysis platform using custom Gemini-powered image models. Processed over 1M frames with 98% accuracy.",
    tags: ["React", "TypeScript", "Python", "Gemini API"],
    image: "https://picsum.photos/seed/ai/800/450",
    link: "#"
  },
  {
    id: "2",
    title: "Quantum Ledger",
    description: "A decentralized finance dashboard providing real-time analytics for multi-chain assets. Built with high-availability microservices.",
    tags: ["Next.js", "GraphQL", "Solidity", "Node.js"],
    image: "https://picsum.photos/seed/crypto/800/450",
    link: "#"
  },
  {
    id: "3",
    title: "EcoStream Engine",
    description: "IoT integration platform for smart-city energy management. Reduced municipal energy waste by 15% in pilot cities.",
    tags: ["Go", "InfluxDB", "React", "D3.js"],
    image: "https://picsum.photos/seed/eco/800/450",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "PostgreSQL", level: 82, category: "Backend" },
  { name: "GoLang", level: 75, category: "Backend" },
  { name: "Gemini / GenAI", level: 92, category: "AI/ML" },
  { name: "PyTorch", level: 78, category: "AI/ML" },
  { name: "AWS / GCP", level: 85, category: "Cloud" },
  { name: "Docker / K8s", level: 80, category: "Cloud" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    company: "FutureTech Solutions",
    role: "Lead Full-Stack Engineer",
    period: "2021 - Present",
    description: "Leading a team of 12 engineers in building next-gen AI-driven SaaS platforms. Improved deployment cycles by 40% through automated CI/CD pipelines."
  },
  {
    id: "exp2",
    company: "CloudScale Inc",
    role: "Senior Software Engineer",
    period: "2018 - 2021",
    description: "Engineered scalable cloud infrastructure for enterprise clients. Developed internal UI libraries used across 5 major product lines."
  },
  {
    id: "exp3",
    company: "Innovate Labs",
    role: "Software Developer",
    period: "2016 - 2018",
    description: "Core contributor to the first generation of high-frequency data visualization tools. Optimized front-end rendering performance by 60%."
  }
];
