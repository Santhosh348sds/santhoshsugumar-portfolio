import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';

const timeline = [
  {
    role: 'Associate Developer',
    company: 'Quadrasystems.net',
    period: '2023 – Present',
    duration: '2 Years',
    type: 'Full-time',
    color: 'bg-indigo-600 dark:bg-cyan-500',
    ring: 'ring-indigo-200 dark:ring-cyan-400/30',
    points: [
      'Built SharePoint intranet portals using SPFx & React for enterprise clients',
      'Developed automated document approval workflows on SharePoint Framework',
      'Led development of a Microsoft Teams Recruiting App with Azure AI integrations',
      'Implemented Azure OpenAI & Form Recognizer for intelligent resume processing',
      'Designed REST APIs with Node.js/Express.js backed by SQL stored procedures',
    ],
  },
  {
    role: 'Java Full Stack Developer Intern',
    company: 'Internship',
    period: '2022 – 2023',
    duration: '6 Months',
    type: 'Internship',
    color: 'bg-violet-500 dark:bg-violet-400',
    ring: 'ring-violet-200 dark:ring-violet-400/30',
    points: [
      'Built full-stack web applications using Java, Spring Boot, and Hibernate',
      'Designed and implemented MySQL database schemas and queries',
      'Developed responsive front-end interfaces with HTML, CSS & JavaScript',
      'Practiced OOP, MVC architecture, and RESTful API design patterns',
      'Delivered a complete full-stack project from design to deployment',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400 mb-2">
            Career
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Circle marker */}
                <div
                  className={`absolute left-0 top-1 w-10 h-10 rounded-full ${item.color} ring-4 ${item.ring} flex items-center justify-center text-white shadow-lg`}
                >
                  <HiBriefcase size={18} />
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-indigo-600 dark:text-cyan-400 block">
                        {item.period}
                      </span>
                      <div className="flex items-center gap-2 justify-end mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium">
                          {item.duration}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-cyan-400/10 dark:text-cyan-400 font-medium">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100 dark:bg-slate-700 my-4" />

                  {/* Points */}
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
