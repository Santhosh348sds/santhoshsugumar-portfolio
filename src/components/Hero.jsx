import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-100 text-indigo-700 dark:bg-cyan-400/10 dark:text-cyan-400 mb-6">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="text-indigo-600 dark:text-cyan-400">Santhosh S</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-4"
        >
          Microsoft 365 &amp; SharePoint Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.3)}
          className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed"
        >
          Associate Developer specializing in <strong className="text-slate-700 dark:text-slate-200">SPFx, React</strong>, and{' '}
          <strong className="text-slate-700 dark:text-slate-200">Microsoft Teams</strong> integrations. I build intelligent
          enterprise solutions powered by <strong className="text-slate-700 dark:text-slate-200">Azure AI</strong> and modern
          web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-7 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-900 transition-all shadow-lg hover:shadow-indigo-200 dark:hover:shadow-cyan-900 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3 rounded-lg font-semibold border-2 border-indigo-600 dark:border-cyan-400 text-indigo-600 dark:text-cyan-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.5)} className="flex items-center justify-center gap-5 mb-16">
          <a
            href="[GitHub]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="[LinkedIn]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
          aria-label="Scroll down"
        >
          <HiArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  );
}
