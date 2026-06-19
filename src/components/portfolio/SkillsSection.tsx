import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Layout,
  Terminal,
  Database,
  GitBranch,
  Monitor,
  Zap,
  Globe,
  Sparkles,
  Coffee,
  Github,
} from "lucide-react";

const categories = [
  {
    title: "Frontend Technologies",
    description: "Tools I use to build polished, responsive user interfaces.",
    items: [
      { name: "React", icon: Code2, color: "from-[#61dafb] to-[#22d3ee]" },
      { name: "HTML5", icon: Globe, color: "from-[#f06529] to-[#fb923c]" },
      { name: "CSS3", icon: Layout, color: "from-[#2965f1] to-[#60a5fa]" },
      { name: "JavaScript", icon: Zap, color: "from-[#f7df1e] to-[#eab308]" },
    ],
  },
  {
    title: "Backend & Database",
    description: "The runtime and data stack that powers my applications.",
    items: [
      { name: "Node.js", icon: Terminal, color: "from-[#3c873a] to-[#4ade80]" },
      { name: "MongoDB", icon: Database, color: "from-[#00a86b] to-[#34d399]" },
      { name: "Java", icon: Coffee, color: "from-[#5382a1] to-[#d97706]" },
    ],
  },
  {
    title: "Development Utilities",
    description: "Tools that keep my workflow fast, reliable, and modern.",
    items: [
      { name: "Git", icon: GitBranch, color: "from-[#f05032] to-[#fb7185]" },
      { name: "GitHub", icon: Github, color: "from-[#24292f] to-[#6e5494]" },
      { name: "VS Code", icon: Monitor, color: "from-[#0a84ff] to-[#38bdf8]" },
      { name: "IntelliJ IDEA", icon: Sparkles, color: "from-[#8250df] to-[#a78bfa]" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-16 left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-20 right-16 h-56 w-56 rounded-full bg-neon-blue/20 blur-3xl" />
        <div className="absolute bottom-24 left-20 h-52 w-52 rounded-full bg-neon-purple/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-mono text-primary uppercase tracking-[0.4em] mb-3">
              // TECH STACK
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Built with the tools I trust.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A polished tech stack presentation inspired by the design reference. Each category highlights the libraries,
              platforms, and workflows that power my projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="glass-card border border-white/10 p-8 shadow-[0_0_40px_rgba(14,165,233,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(56,189,248,0.18)]"
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid gap-3">
                  {category.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.45, delay: catIndex * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 shadow-[inset_0_0_20px_rgba(15,23,42,0.4)]"
                      >
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} from-opacity-30 to-opacity-40 text-white`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-white">{item.name}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
