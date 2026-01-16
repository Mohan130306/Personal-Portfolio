import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and frameworks",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Strong DSA skills with algorithmic thinking",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Excellent collaboration and communication skills",
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
              <div className="glass-card rounded-xl p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hi! I'm <span className="text-primary font-semibold">Mohan Kumar</span>, 
                  a passionate MERN Stack Developer currently pursuing my 
                  <span className="text-foreground font-medium"> BE in Computer Science and Engineering</span> at 
                  VSB College of Engineering Technical Campus (2023-2027).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With a strong foundation in full-stack development, I specialize in building 
                  modern web applications using <span className="text-primary">React</span>, 
                  <span className="text-primary"> Node.js</span>, and 
                  <span className="text-primary"> MongoDB</span>. My journey in tech started with 
                  curiosity and has evolved into a deep passion for creating impactful digital solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently maintaining a <span className="text-foreground font-medium">CGPA of 8.96</span> while 
                  actively participating in competitive coding and exploring new technologies. I believe 
                  in continuous learning and pushing boundaries to deliver exceptional results.
                </p>
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
                  className="glass-card rounded-xl p-6 text-center hover:neon-border transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
