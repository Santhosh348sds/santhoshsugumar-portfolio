import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiStar } from 'react-icons/hi';

const projects = [
  {
    title: 'Teams Recruiting Application',
    featured: true,
    description:
      'A complete end-to-end recruiting platform integrated inside Microsoft Teams. Features AI-powered resume parsing via Azure Form Recognizer, intelligent candidate screening through Azure OpenAI, full pipeline management, and a robust REST API backed by SQL stored procedures.',
    highlights: [
      'AI resume parsing with Azure Form Recognizer',
      'GPT-powered candidate screening via Azure OpenAI',
      'Full recruiting pipeline inside MS Teams',
      'SQL stored procedures for high-performance data ops',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'SQL', 'Azure OpenAI', 'Form Recognizer', 'Teams Toolkit'],
    color: 'from-cyan-500 to-indigo-600',
    github: '[GitHub]',
  },
  {
    title: 'SharePoint Approval System',
    featured: false,
    description:
      'Automated document and request approval workflow built with SharePoint Framework. Features dynamic multi-step forms, real-time status tracking, email notifications, and role-based access — eliminating manual paper-based processes.',
    highlights: [
      'Multi-step dynamic approval forms',
      'Real-time status tracking dashboard',
      'Role-based access control',
      'Automated email notifications',
    ],
    tech: ['SPFx', 'React', 'TypeScript', 'SharePoint Lists', 'SharePoint Libraries'],
    color: 'from-indigo-500 to-violet-600',
    github: '[GitHub]',
  },
  {
    title: 'SharePoint Intranet Portal',
    featured: false,
    description:
      'Company-wide intranet portal for internal communication and resource management. Built as a modern SPFx solution replacing legacy SharePoint pages with a responsive, React-based interface for news, announcements, and document management.',
    highlights: [
      'Company news and announcements hub',
      'Document management with SP Libraries',
      'Responsive SPFx web parts',
      'Integrated search and navigation',
    ],
    tech: ['SPFx', 'React', 'TypeScript', 'SharePoint Online', 'SP Lists'],
    color: 'from-violet-500 to-pink-600',
    github: '[GitHub]',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400 mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Projects</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                hovered === i ? 'shadow-2xl -translate-y-1' : 'shadow-md'
              } border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800`}
            >
              {/* Gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-7 md:p-8">
                {/* Title row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
                        <HiStar size={12} /> Flagship
                      </span>
                    )}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-cyan-400 hover:underline whitespace-nowrap"
                  >
                    <HiCode size={16} /> View Code
                  </a>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="grid sm:grid-cols-2 gap-1.5 mb-6">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
