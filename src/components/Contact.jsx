import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    href: 'https://github.com/Santhosh348sds',
    value: 'https://github.com/Santhosh348sds',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/santhosh348/',
    value: 'https://www.linkedin.com/in/santhosh348/',
  },
  {
    icon: <HiMail size={20} />,
    label: 'Email',
    href: 'mailto:santhoshsanthosh86920@gmail.com',
    value: 'santhoshsanthosh86920@gmail.com',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to an email service (EmailJS, Formspree, etc.)
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800 px-6">
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
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Contact Me</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm">
            Have a project idea or want to collaborate? Reach out to Me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
              <HiLocationMarker className="text-indigo-600 dark:text-cyan-400 flex-shrink-0" size={20} />
              <span>India &mdash; Open to remote &amp; hybrid roles</span>
            </div>

            <div className="space-y-4">
              {socials.map(({ icon, label, href, value }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <span className="text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-7 shadow-sm space-y-5"
          >
            {sent && (
              <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-3 text-sm text-green-700 dark:text-green-400 text-center font-medium">
                Message sent! I'll get back to you soon.
              </div>
            )}

            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  required
                  value={form[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-cyan-500 transition"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-cyan-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-900 transition-all shadow-md hover:shadow-indigo-200 dark:hover:shadow-cyan-900 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
