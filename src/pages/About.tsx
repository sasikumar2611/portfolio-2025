import Section from '../components/Section';
import { motion } from 'framer-motion';

const techStack = [
 "HTML", "CSS", "JS", "React", "Bootstrap", "Tailwind","Redux",
];

const experiences = [
   
    {
      role: "Junior Software Developer",
      company: "Coherent Pixels Systems",
      period: "2024 - Present",
      description: "Worked with team members to build clean, responsive, and user-friendly UI components."
    }
  ];

const About = () => {
  return (
    <Section id="about" className="min-h-screen py-20 flex flex-col justify-center">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section (Left) */}
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
          >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="text-neon">Me</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                      I’m a frontend developer who enjoys building fast and scalable web applications. I like turning complex problems into clean, simple, and easy-to-use interfaces.
                  </p>
                  <p>
                      With 1.5+ years of experience, I’ve worked with different teams and technologies. I focus on writing clean code and creating designs that feel smooth and intuitive for users.
                  </p>
                  
                  <div className="pt-6">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                          {techStack.map((tech) => (
                              <span 
                                  key={tech}
                                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] transition-colors cursor-default"
                              >
                                  {tech}
                              </span>
                          ))}
                      </div>
                  </div>
              </div>
          </motion.div>

          {/* Experience Section (Right) */}
          <div className="w-full">
             <motion.h3 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 flex items-center gap-4"
             >
                <span className="w-12 h-[2px] bg-[var(--neon-cyan)]" />
                Experience
             </motion.h3>

             <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 md:pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]" />
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <span className="hidden md:block text-gray-600">•</span>
                      <p className="text-[var(--neon-blue)] font-medium">{exp.company}</p>
                    </div>
                    
                    <p className="text-sm font-mono text-gray-500 mb-4">{exp.period}</p>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
          </div>
      </div>
    </Section>
  );
};

export default About;
