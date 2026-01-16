import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star, GitFork, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHubRepos, GitHubRepo } from "@/hooks/useGitHubRepos";
import { Skeleton } from "@/components/ui/skeleton";

const filterOptions = ["All", "JavaScript", "TypeScript", "HTML", "CSS", "Python"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const { data: repos, isLoading, error } = useGitHubRepos();

  const filteredRepos = repos?.filter((repo) => {
    if (activeFilter === "All") return true;
    return repo.language?.toLowerCase() === activeFilter.toLowerCase();
  });

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      HTML: "bg-orange-500",
      CSS: "bg-purple-500",
      Python: "bg-green-500",
      Java: "bg-red-500",
    };
    return colors[language || ""] || "bg-gray-400";
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-sm font-mono text-primary mb-2">{"// PROJECTS"}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Work</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Projects fetched directly from my GitHub. Click to explore the code!
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Filter size={18} className="text-muted-foreground self-center" />
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "neon-glow"
                    : "neon-border hover:bg-primary/10"
                }
              >
                {filter}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass-card rounded-xl p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-6" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-muted-foreground py-12">
              <p>Failed to load projects. Please try again later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos?.slice(0, 9).map((repo, index) => (
                <ProjectCard
                  key={repo.id}
                  repo={repo}
                  index={index}
                  isInView={isInView}
                  getLanguageColor={getLanguageColor}
                />
              ))}
            </div>
          )}

          {filteredRepos?.length === 0 && !isLoading && (
            <p className="text-center text-muted-foreground py-12">
              No projects found with this filter.
            </p>
          )}

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="neon-border hover:bg-primary/10 gap-2"
              asChild
            >
              <a
                href="https://github.com/Mohan130306?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
  isInView: boolean;
  getLanguageColor: (language: string | null) => string;
}

const ProjectCard = ({ repo, index, isInView, getLanguageColor }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card rounded-xl p-6 group hover:neon-border transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
          {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
        </h4>
        <div className="flex gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
        {repo.description || "No description available"}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
        {repo.language && (
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
            <span>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Star size={14} />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={14} />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
