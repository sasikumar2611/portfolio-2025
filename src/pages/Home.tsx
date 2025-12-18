import Section from '../components/Section';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import useMousePosition from '../hooks/useMousePosition';
import { useState, useEffect } from 'react';

const roles = ["Frontend Developer", "React Developer"];

import profileImg from '../assets/20251108_095129.jpg';

const Home = () => {
  const { x, y } = useMousePosition();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);


  return (
    <Section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Spotlight Effect */}
        <motion.div 
            animate={{ x: x - 250, y: y - 250 }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }} // Less delay for sharper feel
            className="fixed top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,var(--neon-cyan),transparent_70%)] opacity-20 blur-[100px] pointer-events-none z-0 hidden md:block rounded-full" 
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
            {/* Left Content */}
            <div className="space-y-6 order-2 md:order-1">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-2 rounded-full glass-card"
                >
                    <span className="text-neon font-mono text-sm">Hi, I'm Sasi Kumar</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    I build <span className="text-gray-500">elegant </span>and <br />
<span className="text-gray-500">user-friendly</span> <br />
                    <span className="text-white">digital products.</span>
                </h1>

                <div className="h-8 md:h-12 overflow-hidden">
                     <p className="text-2xl md:text-3xl text-gray-400 font-mono">
                        <span className="text-neon">{text}</span>
                        <span className="animate-pulse">|</span>
                     </p>
                </div>
                
                <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                    Focused on building fast, intuitive, and accessible frontend experiences.
                </p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 pt-4"
                >
                    <a href="#work" className="btn-neon px-8 py-3 rounded-full font-bold uppercase tracking-wider flex items-center gap-2">
                        View Projects
                    </a>
                    <a href="/sasikumar-resume.pdf" download className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 text-white">
                        <Download size={18} /> Resume
                    </a>
                </motion.div>
            </div>

            {/* Right Content - Abstract Visual */}
            <div className="relative flex justify-center items-center order-1 md:order-2">
                 <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                    {/* Animated Blob */}
                    <motion.div 
                        animate={{ 
                            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
                            rotate: [0, 360]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-[var(--neon-cyan)] opacity-50 bg-[var(--neon-cyan)]/10 backdrop-blur-3xl z-0"
                    />
                     <motion.div 
                        animate={{ 
                            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 30% 40% 60% / 50% 30% 50% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                            rotate: [360, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border border-[var(--neon-blue)] opacity-30 z-0"
                    />
                    
                    {/* Profile Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="relative z-10 w-48 h-48 md:w-70 md:h-70 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                    >
                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                    </motion.div>
                 </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, y: [0, 10, 0] }}
           transition={{ delay: 1, duration: 2, repeat: Infinity }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <ArrowDown size={24} />
        </motion.div>
    </Section>
  );
};

export default Home;
