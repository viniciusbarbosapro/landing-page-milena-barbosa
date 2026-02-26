import { motion } from 'motion/react';
import { Frown, EyeOff, XCircle } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: Frown,
      text: "Acorda cedo e a primeira coisa que faz é correr para o espelho preencher as sobrancelhas..."
    },
    {
      icon: EyeOff,
      text: "Sente que sem maquiagem o rosto parece 'apagado', que falta alguma coisa..."
    },
    {
      icon: XCircle,
      text: "Já tentou design em outros lugares, mas o resultado ficou artificial demais."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-beige">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl text-brown mb-4">Você já se reconhece nisso?</h2>
          <div className="w-16 h-0.5 bg-copper mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white transition hover:bg-white hover:shadow-xl hover:shadow-terracotta/5"
              >
                <div className="p-2 bg-white rounded-full shadow-sm text-terracotta">
                  <point.icon className="w-6 h-6" />
                </div>
                <p className="text-gray-700 leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-beige">
              <p className="font-serif text-2xl italic text-brown mb-8 leading-relaxed">
                "Você olha para fotos de outras mulheres com o olhar marcado e pensa: <span className="text-terracotta font-semibold">'Por que com minha sobrancelha nunca fica assim?'</span>"
              </p>
              <p className="text-gray-600 font-medium">
                A resposta é simples: você nunca teve um design feito para o <span className="underline decoration-copper decoration-2 underline-offset-4">SEU</span> rosto.
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-terracotta/20 rounded-[2.5rem] z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
