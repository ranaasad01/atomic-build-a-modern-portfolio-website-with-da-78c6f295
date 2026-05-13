"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper, SectionHeading } from "@/components/SectionWrapper";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: "🚀",
    title: "Performance First",
    description: "I obsess over Core Web Vitals and build apps that load fast and feel instant.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    description: "Every product I build meets WCAG 2.1 AA standards — great UX for everyone.",
  },
  {
    icon: "🔧",
    title: "Clean Code",
    description: "I write maintainable, well-tested code that teams love to work with.",
  },
  {
    icon: "🌍",
    title: "Open Source",
    description: "Active contributor with 3,200+ GitHub stars across personal projects.",
  },
];

export function About() {
  return (
    <SectionWrapper id="about" className="bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Passionate about building great software"
          description="Here's a bit about who I am and what drives me."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Decorative border */}
              <div className="absolute -inset-1 rounded-2xl animated-border opacity-60 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-surface border border-border">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name + " profile photo"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 border border-border"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Open to work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-foreground">{personalInfo.name}</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                {personalInfo.title}
              </span>
            </div>

            <p className="text-muted text-base leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </span>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
