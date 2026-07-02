import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Java Developer",
    "Mern Stack Developer",
    "Data Analyst",
    "AI Prompt Engineer",
    "Problem solver"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-mono text-lg mb-4"
            >
              Hi, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-gradient">Mohan Kumar</span>
            </motion.h1>

            {/* Title with typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 min-h-[40px] sm:min-h-[48px]"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground">
                <span className="text-primary">{">"}</span>{currentText}
                <span className="inline-block w-0.5 h-6 md:h-8 bg-primary animate-blink align-middle ml-1" />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6"
            >
              Building scalable solutions with Java and modern web technologies.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0 mb-6 bg-card/40 border border-white/5 backdrop-blur-md rounded-xl p-4 shadow-[0_0_20px_rgba(34,211,238,0.04)]"
            >
              <div className="flex flex-col items-center lg:items-start border-r border-white/10 pr-2">
                <span className="text-xl sm:text-2xl font-extrabold text-primary animate-pulse-glow rounded-md px-1">8.67</span>
                <span className="text-[9px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1 text-center lg:text-left">CGPA</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-r border-white/10 px-2">
                <span className="text-xl sm:text-2xl font-extrabold text-gradient">10+</span>
                <span className="text-[9px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1 text-center lg:text-left">Certifications</span>
              </div>
              <div className="flex flex-col items-center lg:items-start pl-2">
                <span className="text-xl sm:text-2xl font-extrabold text-neon-blue">15+</span>
                <span className="text-[9px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1 text-center lg:text-left">Projects</span>
              </div>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <span className="text-xs font-mono text-muted-foreground mr-1">Focus:</span>
              {["Java", "React", "Node.js", "Python", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-secondary/40 border border-white/5 text-foreground flex items-center gap-1.5 hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full"
            >
              <Button
                size="lg"
                className="neon-glow gap-2 px-8 w-full sm:w-auto"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowDown size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 neon-border hover:bg-primary/10 w-full sm:w-auto"
                asChild
              >
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <a
                href="https://github.com/Mohan130306"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} className="group-hover:animate-float" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohan-kumar-a-4a6a9a2b7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} className="group-hover:animate-float" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Soft glow background */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse pointer-events-none" />
              
              {/* Outer decorative neon rings */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-primary/20 animate-[spin_60s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-2 rounded-full border border-neon-blue/30 pointer-events-none" />
              
              {/* Hover active glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-neon-blue opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative rounded-full p-2 bg-gradient-to-tr from-primary/30 to-neon-blue/30 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                <img
                  src={`${import.meta.env.BASE_URL}profilepic.png`}
                  alt="Mohan Kumar"
                  className="
                    w-64 h-64
                    sm:w-72 sm:h-72
                    lg:w-96 lg:h-96
                    rounded-full
                    object-cover
                    border-4 border-primary/80
                    bg-background
                    relative
                    z-10
                    transition-transform duration-500 group-hover:scale-[1.02]
                  "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary/50"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
