import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Code2, Sparkles } from "lucide-react";
import Section from "../ui/Section";
import ratanImage from "../../assets/images/ratana.JPG"; // Your photo

const About = () => {
  return (
    <Section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
              About Me
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Turning complex problems into simple, beautiful, and scalable
            solutions
          </p>
        </motion.div>

        {/* Asymmetric Grid: Photo + Bio + Stats */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Photo + Floating Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Glowing Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000" />

              {/* Photo Card */}
              <div className="relative bg-black/50 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden">
                <img
                  src={ratanImage}
                  alt="Loem Ratana"
                  className="w-full h-96 object-cover object-top  group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-medium">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Experience", value: "MIS Student" },
                { label: "Projects", value: "Academic & Personal Projects" },

              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
                >
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 mt-6 text-gray-300"
            >
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>Phnom Penh, Cambodia</span>
            </motion.div>
          </div>

          {/* Right: Bio + Principles + CTA */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg leading-relaxed text-gray-300"
            >
              <p>
                Hi, I’m{" "}
                <span className="font-bold text-white">Loem Ratana</span> — a
                motivated and detail-oriented
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {" "}
                  MIS (Management Information Systems) student
                </span>{" "}
                at SETEC Institute with a strong passion for building practical
                and impactful technology solutions.
              </p>

              <p>
                I have hands-on experience in web development using HTML, CSS,
                JavaScript, React, Tailwind CSS, and PHP, along with developing
                C# Windows Forms applications and working with SQL & MySQL
                database systems. I enjoy turning ideas into functional systems
                that support and improve business operations.
              </p>

              <p>
                I’m eager to apply my academic knowledge to real-world IT
                projects, with a strong focus on continuous learning, clean
                code, and teamwork. I believe good systems are not only
                functional, but also reliable, maintainable, and built with
                users in mind.
              </p>
            </motion.div>

            {/* Principles */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-purple-400" />
                What I Stand For
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Build simple, reliable solutions",
                  "Clean and readable code matters",
                  "Learn by building real projects",
                  "User experience comes first",
                  "Strong foundations over shortcuts",
                  "Technology should solve real problems",
                ].map((principle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <Code2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-200">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
