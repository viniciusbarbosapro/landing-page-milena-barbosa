import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-8 z-10"
          >
            <span className="text-terracotta tracking-[0.3em] text-xs uppercase font-semibold">
              Designer de Sobrancelhas & Lash Designer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-brown">
              O seu olhar já tem tudo que precisa. <span className="italic text-terracotta">Eu só vou revelar isso.</span>
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
              Design de sobrancelhas e cílios pensado exclusivamente para o seu rosto — com técnica precisa, cuidado real e um resultado que você vai querer mostrar para todo mundo.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/5571985221450"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gold text-white font-medium shadow-lg hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5" />
                Quero agendar minha transformação
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white h-[500px] md:h-[650px]">
              <img
                src="/foto-profissional.png"
                alt="Milena Barbosa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
