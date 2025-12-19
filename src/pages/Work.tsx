import Section from "../components/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import portfolio from "../assets/portfolio.png";
import shopyKart from "../assets/shopykart.png";

const projects = [
  {
    title: "Portfolio 2025",
    description:
      "A personal portfolio showcasing my frontend skills, projects, and experience.",
    tech: ["React", "Tailwind"],
    image: portfolio, // Replace with real image later
    live: "https://sasikportfolio.netlify.app",
    github: "https://github.com/sasikumar2611/portfolio-2025",
  },
  {
    title: "Shopy kart",
    description:
      "Real-time crypto and stock market tracking dashboard with interactive charts.",
    tech: ["React", "MUI", "TypeScript"],
    image: shopyKart,
    live: "https://myshopykart.netlify.app",
    github: "https://github.com/sasikumar2611/shoppingCart",
  },
  
];

const Work = () => {
  return (
    <Section id="work" className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-neon">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of projects that showcase my skills and passion for
          building.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Project Image */}
            <div className="h-48 w-full relative overflow-hidden p-2 border-b border-white/20 rounded-l-lg rounded-r-lg">
              {project.image.startsWith("linear-gradient") ? (
                <div
                  className="h-full w-full"
                  style={{ background: project.image }}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover rounded-lg"
                />
              )}

              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-neon transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-neon text-center py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-center text-sm font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Work;
