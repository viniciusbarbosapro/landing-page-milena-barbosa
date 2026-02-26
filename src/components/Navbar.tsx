import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-beige"
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="w-24 md:w-32">
          <img
            src="/logo-copia.png"
            alt="Milena Barbosa"
            className="w-full h-auto object-contain"
          />
        </div>
        <a
          href="#agendamento"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-all rounded-full text-sm tracking-wide uppercase font-medium"
        >
          <Calendar className="w-4 h-4" />
          Agendar Horário
        </a>
      </div>
    </motion.nav>
  );
}
