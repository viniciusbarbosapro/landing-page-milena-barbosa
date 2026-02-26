import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Camera, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section className="py-24 bg-cream relative" id="agendamento">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-sage/5 rounded-[4rem] -rotate-2 -z-10"></div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-8 md:p-20 shadow-2xl border border-beige text-center relative z-10"
            >
              <h2 className="text-3xl md:text-5xl text-brown mb-6 font-serif leading-tight">As vagas desta semana estão quase esgotadas</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                Atendo de forma individual e exclusiva. Quando a agenda fecha, fecha de verdade. <br className="hidden md:block" />
                Se você chegou até aqui, sabe que é hora de se cuidar.
              </p>

              <div className="bg-terracotta/5 text-terracotta px-8 py-3 rounded-full inline-block mb-12 text-sm font-bold tracking-[0.1em] uppercase border border-terracotta/10">
                ⚠️ Poucos horários disponíveis
              </div>

              <div className="flex flex-col items-center gap-8">
                <a
                  href="https://wa.me/5571985221450"
                  className="w-full md:w-auto px-12 py-6 rounded-full bg-gold text-white text-lg font-bold shadow-xl flex items-center justify-center gap-4 hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300"
                >
                  <Calendar className="w-6 h-6" />
                  Quero garantir minha vaga agora
                </a>
                <p className="text-sm text-gray-400 italic">
                  Clique e fale diretamente comigo no WhatsApp
                </p>
              </div>

              <div className="mt-16 flex flex-col md:flex-row justify-center gap-10 text-sm text-gray-500 border-t border-beige pt-12">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-copper" />
                  Atendimento em São Gonçalo / Salvador
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-copper" />
                  Resposta em até 1h (Horário comercial)
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="font-serif text-3xl italic text-terracotta mb-4 leading-tight">
                <div className="w-24 md:w-32">
                  <img
                    src="public/logo-copia.png"
                    alt="Milena Barbosa"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm font-light tracking-wide max-w-xs">Realçando beleza real. Uma cliente de cada vez.</p>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/milenabarbosaa__/" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold transition-all">
                <Camera className="w-6 h-6" />
              </a>
              <a href="https://wa.me/5571985221450" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold transition-all">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-xs tracking-widest uppercase">
            © 2025 Milena Barbosa. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
