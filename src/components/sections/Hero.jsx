import React, { useRef } from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { scrollToSection } from '../../lib/utils';
import ratanImage from "../../assets/images/ratana.JPG";
import ratana_pic from "../../assets/images/ratana_pic.png"

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 60);
    mouseY.set(y * 60);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-black to-cyan-900/10" />

        <motion.div style={{ x: smoothX, y: smoothY }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <motion.div style={{ x: useTransform(smoothX, v => -v * 0.8), y: useTransform(smoothY, v => -v * 0.8) }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl" />
        <motion.div style={{ x: smoothX, y: smoothY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 90 }}
            className="space-y-10 text-left"
          >
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-300">
                  RATANA
                </h1>
                <motion.div
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0  bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl -skew-x-12"
                />
              </div>

              <div>
  <p className="text-3xl md:text-5xl font-light text-gray-300">
    MIS Student & Web Developer
  </p>
  <p className="text-xl font-sans text-gray-500 mt-3">
    React • JavaScript • Tailwind CSS • PHP • MySQL
  </p>
</div>

<p className="text-lg md:text-xl font-sans text-gray-400 max-w-lg leading-relaxed">
  I design and build practical, user-friendly web applications that support
  real business needs and everyday users.
  <br />
  <span className="text-purple-300 font-medium">
    Phnom Penh — Open to internships & junior roles
  </span>
</p>
</div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-10 py-5 bg-white text-black font-semibold text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-600/40 transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Projects
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition" />
                </span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.6 }} />
              </button>

              <a
                onClick={() => scrollToSection('testimonials')}
                // href="mailto:loemratana63@gmail.com"
                className="px-10 py-5 border border-gray-600 rounded-2xl text-lg font-medium text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 backdrop-blur-xl transition-all"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-8">
              {[
                { Icon: Github, href: "https://github.com" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/loem-ratana-b922a8297/" },
                { Icon: Mail, href: "mailto:loemratana63@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a key={i} href={href} target="_blank" whileHover={{ y: -8, scale: 1.2 }} className="text-gray-500 hover:text-white transition">
                  <Icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image with 3D Hover + Glow (your favorite effect is back!) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.3, type: "spring", stiffness: 80 }}
            className="relative flex justify-center"
            style={{ perspective: 1500 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.06, 
                rotateY: 15, 
                rotateX: 10 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group cursor-pointer"
            >
              {/* Holographic Glow Ring on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute -inset-12 bg-gradient-to-r from-purple-600/50 via-pink-500/40 to-cyan-500/50 rounded-3xl blur-3xl"
              />

              {/* Image Container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[520px] lg:w-[500px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/10 backdrop-blur-2xl bg-gradient-to-br from-white/8 to-transparent shadow-2xl">
                <img
                  src={ratana_pic}
                  alt="Loem Ratana"
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-112 group-hover:brightness-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2"
              >
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-black px-8 py-3.5 rounded-full font-bold text-sm shadow-2xl flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  Open for Opportunities
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;