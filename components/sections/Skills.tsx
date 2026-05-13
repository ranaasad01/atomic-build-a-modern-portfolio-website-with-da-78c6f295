"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/SectionWrapper";
import { skillCategories, personalInfo } from "@/lib/data";

// ─── Contact Section ──────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const contactLinks = [
    {
      label: "Email", value: personalInfo.email, href: "mailto:" + personalInfo.email,
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
      label: "GitHub", value: "github.com/alexrivera", href: personalInfo.github,
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
    },
    {
      label: "LinkedIn", value: "linkedin.com/in/alexrivera", href: personalInfo.linkedin,
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get back to you within 24 hours."
        />
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Get in touch</h3>
              <p className="text-muted text-sm leading-relaxed">
                I&apos;m currently open to freelance projects, full-time roles, and interesting collaborations. Let&apos;s build something great together.
              </p>
            </div>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 hover:bg-surface-hover transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium">{link.label}</p>
                    <p className="text-sm text-foreground font-medium">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Available for hire</span>
              </div>
              <p className="text-xs text-muted">Currently accepting new projects and full-time opportunities starting Q1 2025.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-surface border border-border space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name <span className="text-accent">*</span></label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email <span className="text-accent">*</span></label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject <span className="text-accent">*</span></label>
                <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="Project inquiry, collaboration, etc." className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message <span className="text-accent">*</span></label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project, timeline, and budget..." className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" />
              </div>
              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-sm font-medium">Message sent! I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-sm font-medium">{errorMsg}</p>
                </motion.div>
              )}
              <button type="submit" disabled={status === "loading"} className="w-full py-4 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
                ) : (
                  <>Send Message<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-indigo-500/20 border-blue-500/20",
  Backend: "from-green-500/20 to-emerald-500/20 border-green-500/20",
  "Cloud & DevOps": "from-orange-500/20 to-amber-500/20 border-orange-500/20",
  "Tools & Design": "from-purple-500/20 to-pink-500/20 border-purple-500/20",
};

const categoryIconColors: Record<string, string> = {
  Frontend: "text-blue-400",
  Backend: "text-green-400",
  "Cloud & DevOps": "text-orange-400",
  "Tools & Design": "text-purple-400",
};

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  "Cloud & DevOps": "☁️",
  "Tools & Design": "🛠️",
};

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className={"h-1 flex-1 rounded-full origin-left " + (i <= level ? "bg-accent" : "bg-border")}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Skills & Technologies"
          description="A curated set of tools and technologies I use to build modern, scalable applications."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className={"p-6 rounded-2xl border bg-gradient-to-br " + (categoryColors[cat.category] || "from-surface to-surface border-border")}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{categoryIcons[cat.category]}</span>
                <h3 className={"text-lg font-bold " + (categoryIconColors[cat.category] || "text-accent")}>
                  {cat.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted">
                        {skill.level === 5
                          ? "Expert"
                          : skill.level === 4
                          ? "Advanced"
                          : skill.level === 3
                          ? "Proficient"
                          : "Familiar"}
                      </span>
                    </div>
                    <SkillBar level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted text-sm mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "MongoDB", "Elasticsearch", "Kafka", "RabbitMQ", "Nginx",
              "Linux", "Bash", "REST APIs", "WebSockets", "OAuth 2.0",
              "Stripe", "Twilio", "SendGrid", "Cloudflare", "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-muted hover:text-foreground hover:border-accent/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
