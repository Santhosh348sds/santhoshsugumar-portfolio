import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400 mb-2">
            Academic
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-800 p-8 shadow-md overflow-hidden"
        >
          {/* Decorative circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/20 opacity-60" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-cyan-100 dark:bg-cyan-900/20 opacity-60" />

          <div className="relative flex items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 dark:bg-cyan-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg">
              <HiAcademicCap size={28} />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400 mb-1">
                Bachelor's Degree
              </p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                B.Sc Computer Science
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                [University Name] &mdash; Graduated 2022
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  'Data Structures',
                  'Algorithms',
                  'Operating Systems',
                  'Database Management',
                  'Software Engineering',
                  'OOP Concepts',
                  'Computer Networks',
                ].map((subject) => (
                  <span
                    key={subject}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 p-6 text-center"
        >
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Certifications &amp; courses will be added here &mdash;{' '}
            <span className="text-indigo-500 dark:text-cyan-500 font-medium">
              Azure, Microsoft 365, etc.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
