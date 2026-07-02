import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Rocket, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Award, 
  ArrowUpRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Code2,
    title: "Class Representative",
    description: "Elected to represent classmates and support student-led initiatives",
    color: "text-blue-400 group-hover:text-blue-300",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  {
    icon: Rocket,
    title: "Event Organizer",
    description: "Participated in organizing multiple campus events with strong coordination",
    color: "text-emerald-400 group-hover:text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Strong DSA skills with algorithmic thinking",
    color: "text-purple-400 group-hover:text-purple-300",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Excellent collaboration and communication skills",
    color: "text-orange-400 group-hover:text-orange-300",
    bg: "bg-orange-500/10",
    border: "hover:border-orange-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-2">{"// ABOUT ME"}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Get to know <span className="text-gradient">me</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-xl p-8 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                  I am a <span className="text-foreground font-medium">Computer Science and Engineering</span> student at V S B College of Engineering Technical Campus, currently maintaining a CGPA of <span className="text-primary font-semibold">8.67</span>. I completed my schooling at NAMMHSS, scoring <span className="text-foreground font-medium">81.5% (489/600)</span> in my 12th grade. My core expertise lies in <span className="text-primary font-semibold">Java Development</span> and building dynamic, full-stack web applications using the <span className="text-primary font-semibold">MERN stack</span>. I am deeply passionate about software engineering, writing clean code, and developing efficient software solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                  To solve the problem where non-technical team members always have to rely on developers to get data from a database, I built a full-stack <span className="text-foreground font-medium">Natural Language to SQL Query Builder</span> using the MERN stack. My goal was to make data retrieval easy so that anyone who knows English can interact with a database without needing to know SQL. By adding logic that translates simple English sentences into precise SQL queries, I created a working solution that connects everyday users with complex databases, making data access much faster and saving time for developers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                  Outside of writing code, I always focus on learning new skills and making sure my software is fast, reliable, and easy to maintain. Whether I am working on backend Java logic or building full-stack web apps, I care about creating systems that solve real problems efficiently. I am now looking for good opportunities where I can use my <span className="text-primary font-semibold">problem-solving mindset</span> and full-stack development skills to contribute to exciting software projects and grow within a team.
                </p>


                {/* Academic Credentials Row */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/20 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">8.67 CGPA</div>
                      <div className="text-[10px] text-muted-foreground">B.E. Computer Science</div>
                    </div>
                  </div>
                  <div className="bg-secondary/20 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                      <Award size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">81.5%</div>
                      <div className="text-[10px] text-muted-foreground">Class XII (HSC)</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`glass-card rounded-xl p-6 text-center transition-all duration-300 group ${item.border} ${item.shadow}`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${item.bg}`}>
                    <item.icon className={`transition-colors duration-300 ${item.color}`} size={24} />
                  </div>
                  <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed text-center">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
