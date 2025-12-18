import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
    const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "15c20996-eadc-4323-b99a-24011c212079");
    const loadingToast = toast.loading("Sending message...");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      toast.dismiss(loadingToast);
      if (data.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("Something went wrong. Try again!");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Network error. Please try again later.");
    }
  };
  return (
    <Section id="contact" className="min-h-screen py-20 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto w-full">
        
        {/* Left Info */}
        <div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-6"
            >
                Let's Work <br />
                <span className="text-neon">Together</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
                Have a project in mind or just want to say hi? I'm always open to new ideas and opportunities.
            </p>

            <div className="flex gap-6 mb-12">
                <a href="https://github.com/sasikumar2611" target="_blank"
  rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[var(--neon-cyan)] hover:text-black transition-all duration-300">
                    <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sasik26/"  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-white/5 hover:bg-[var(--neon-blue)] hover:text-white transition-all duration-300">
                    <Linkedin size={24} />
                </a>
                <a     href="https://mail.google.com/mail/?view=cm&to=sasikumarks261@gmail.com"
  target="_blank"
  rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-pink-500 hover:text-white transition-all duration-300">
                    <Mail size={24} />
                </a>
            </div>
        </div>

        {/* Right Form */}
        <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-3xl space-y-6"
        >
            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Name</label>
                <input type="text" name='name' required className="w-full bg-black/30 border border-white/10 rounded-lg p-4 focus:border-[var(--neon-cyan)] focus:outline-none transition-colors" placeholder="Sasi kumar" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                <input type="email" name='email' required className="w-full bg-black/30 border border-white/10 rounded-lg p-4 focus:border-[var(--neon-cyan)] focus:outline-none transition-colors" placeholder="sasi@example.com" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea rows={4} required name='message' className="w-full bg-black/30 border border-white/10 rounded-lg p-4 focus:border-[var(--neon-cyan)] focus:outline-none transition-colors" placeholder="Hello sasi..." />
            </div>

            <button type="submit" className="w-full btn-neon py-4 rounded-lg font-bold flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.form>
      </div>

       <div className="mt-auto pt-20 text-center border-t border-white/5 w-full">
            <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Sasi Kumar. Built with React, Tailwind & Framer Motion.
            </p>
       </div>
    </Section>
  );
};

export default Contact;
