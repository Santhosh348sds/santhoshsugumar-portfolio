import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiSpringboot, SiMysql,
} from 'react-icons/si';
import { FaJava, FaShareAlt, FaMicrosoft, FaDatabase, FaBrain, FaCloud } from 'react-icons/fa';

const categories = [
  {
    label: 'Frontend',
    color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700',
    accent: 'text-indigo-600 dark:text-indigo-400',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
      { name: 'SPFx', icon: <FaShareAlt /> },
    ],
  },
  {
    label: 'Backend',
    color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700',
    accent: 'text-emerald-600 dark:text-emerald-400',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Hibernate', icon: <FaDatabase /> },
      { name: 'REST APIs', icon: <FaDatabase /> },
    ],
  },
  {
    label: 'Microsoft 365',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700',
    accent: 'text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'SharePoint Online', icon: <FaShareAlt /> },
      { name: 'SPFx', icon: <FaMicrosoft /> },
      { name: 'SP Lists & Libraries', icon: <FaMicrosoft /> },
      { name: 'MS Teams Toolkit', icon: <FaMicrosoft /> },
      { name: 'Teams Tab Framework', icon: <FaMicrosoft /> },
    ],
  },
  {
    label: 'AI & Cloud',
    color: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-700',
    accent: 'text-cyan-600 dark:text-cyan-400',
    skills: [
      { name: 'Azure OpenAI', icon: <FaCloud /> },
      { name: 'Azure Form Recognizer', icon: <FaBrain /> },
      { name: 'Azure Cloud', icon: <FaCloud /> },
    ],
  },
  {
    label: 'Database',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700',
    accent: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'SQL & Stored Procs', icon: <FaDatabase /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'SharePoint Lists', icon: <FaShareAlt /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-800 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400 mb-2">
            Tech Stack
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ label, color, accent, skills }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border p-6 ${color}`}
            >
              <h3 className={`font-bold text-base mb-4 ${accent}`}>{label}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, icon }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-600"
                  >
                    <span className={`text-base ${accent}`}>{icon}</span>
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
