import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase, HiLightBulb } from 'react-icons/hi';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const cards = [
  {
    icon: <HiAcademicCap size={28} />,
    title: 'Education',
    text: 'B.Sc Computer Science — strong foundation in algorithms, data structures, and software engineering principles.',
  },
  {
    icon: <HiBriefcase size={28} />,
    title: 'Experience',
    text: '2+ years as an Associate Developer in the Microsoft 365 & SharePoint ecosystem, after a 6-month Java Full Stack internship.',
  },
  {
    icon: <HiLightBulb size={28} />,
    title: 'Passion',
    text: 'Obsessed with building intelligent enterprise tools that blend Azure AI, React, and the Microsoft platform into seamless user experiences.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400 mb-2">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Who I Am
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-base"
          >
            <p>
              I'm <span className="font-semibold text-slate-800 dark:text-white">Santhosh S</span>, an Associate Developer
              at Quadrasystems, focused on the Microsoft 365 & SharePoint ecosystem.
              My journey started with a <strong>6-month Java Full Stack internship</strong> where I built
              full-stack applications using Spring Boot, Hibernate, and MySQL.
            </p>
            <p>
              Transitioning into Microsoft technologies, I've spent <strong>2 years</strong> delivering
              enterprise-grade SPFx web parts, SharePoint portals, and approval workflows. My flagship
              project—a <strong>Teams Recruiting Application</strong>—integrates Azure OpenAI and Form
              Recognizer for AI-powered hiring pipelines inside Microsoft Teams.
            </p>
            <p>
              I'm passionate about the intersection of <strong>AI and enterprise collaboration</strong>—building
              tools that make organizations smarter and workflows more efficient.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '3+', label: 'Enterprise Projects' },
              { value: '10+', label: 'Technologies' },
              { value: 'AI', label: 'Azure Integration' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 text-center bg-slate-50 dark:bg-slate-800 hover:shadow-md transition-shadow"
              >
                <p className="text-3xl font-extrabold text-indigo-600 dark:text-cyan-400 mb-1">{value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-indigo-600 dark:text-cyan-400 mb-3">{icon}</div>
              <h3 className="font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
