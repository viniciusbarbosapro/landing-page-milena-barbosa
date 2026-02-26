import { motion } from 'motion/react';
import { Scissors, Brush, Eye, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Design de Sobrancelhas",
      desc: "Design personalizado com mapeamento facial completo. Resultado natural, simétrico e que combina com você.",
      icon: Scissors,
      highlight: false
    },
    {
      title: "Sobrancelha com Henna",
      desc: "Coloração que define, preenche e deixa o olhar mais expressivo por até 15 dias. Praticidade pura.",
      icon: Brush,
      highlight: true
    },
    {
      title: "Lash Design",
      desc: "Extensão de cílios com volume e curvatura pensados para o seu olho. Acorde pronta e dispense o rímel.",
      icon: Eye,
      highlight: false
    },
    {
      title: "Lifting de Cílios",
      desc: "Curvatura perfeita nos seus próprios cílios. Resultado natural que dura até 8 semanas.",
      icon: CheckCircle,
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-terracotta uppercase tracking-widest text-sm font-bold">Menu de Serviços</span>
          <h2 className="text-3xl md:text-5xl text-brown mt-4">O que posso fazer pelo seu olhar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                ${service.highlight 
                  ? 'bg-white shadow-2xl border-2 border-terracotta relative lg:-mt-6' 
                  : 'bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-xl border border-white'
                } 
                p-10 rounded-3xl h-full group transition-all duration-500
              `}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Mais Procurado
                </div>
              )}
              
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-3xl transition-colors
                ${service.highlight 
                  ? 'bg-beige text-brown' 
                  : 'bg-cream text-terracotta group-hover:bg-terracotta group-hover:text-white'
                }
              `}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-serif text-2xl text-brown mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
