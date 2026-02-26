import { motion } from 'motion/react';
import { Smile, ShieldCheck, Gem, HeartHandshake } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Smile, text: "Visagismo Personalizado" },
    { icon: ShieldCheck, text: "Biossegurança Rigorosa" },
    { icon: Gem, text: "Materiais Premium" },
    { icon: HeartHandshake, text: "Atendimento Humanizado" }
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -left-8 -bottom-8 w-full h-full bg-sage/10 rounded-[4rem] -z-10"></div>
            <img
              src="/foto-apresentacao.png"
              alt="Milena Barbosa Profissional"
              className="relative rounded-[4rem] shadow-2xl w-full object-cover h-[600px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-beige">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-brown">Especialista</p>
                <p className="text-xs text-gray-500 uppercase tracking-tighter">Certificada</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl text-brown mb-8 leading-tight">Por que o resultado comigo é diferente?</h2>

            <div className="space-y-6 text-gray-600 mb-10 text-lg font-light leading-relaxed">
              <p>Olá, eu sou a <strong className="text-terracotta font-semibold">Milena Barbosa</strong> — especialista em realçar a beleza natural de cada cliente. Aqui não existe "padrão".</p>
              <p>Cada atendimento começa com uma análise personalizada do seu formato de rosto, estrutura óssea e expressão natural. Estudamos juntas o que funciona para você.</p>
              <p className="font-medium text-brown italic border-l-4 border-copper pl-6 py-2">
                Você está confiando o seu rosto às minhas mãos. Eu levo isso muito a sério.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-xl shadow-sm text-copper">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-brown tracking-wide">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
