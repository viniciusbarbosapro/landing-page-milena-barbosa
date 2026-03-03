import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Brush, Eye, CheckCircle, X } from 'lucide-react';

interface PriceItem {
  name: string;
  price: string;
}

interface Service {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight: boolean;
  prices: PriceItem[];
  whatsappMsg: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Design de Sobrancelhas",
      desc: "Design personalizado com mapeamento facial. Resultado natural e que combina com você.",
      icon: Scissors,
      highlight: false,
      prices: [
        { name: "Design Simples", price: "R$ 10" },
        { name: "Design com Pinça", price: "R$ 15" },
      ],
      whatsappMsg: "Hellou Migles 💕, vim pelo site...\nGostaria de agendar o meu momento... Um belo design de sobrancelhas"
    },
    {
      title: "Sobrancelha com Henna",
      desc: "Coloração que define, preenche e deixa o olhar mais expressivo por até 15 dias. Praticidade pura.",
      icon: Brush,
      highlight: false,
      prices: [
        { name: "Henna Simples", price: "R$ 35" },
        { name: "Henna + Design", price: "R$ 45" },
      ],
      whatsappMsg: "Hellou Migles 💕, vim pelo site...\nGostaria de agendar o meu momento... Uma sobrancelha com henna maravilhosa"
    },
    {
      title: "Lash Design",
      desc: "Extensão de cílios com volume e curvatura pensados para o seu olhar. Acorde pronta e dispense o rímel.",
      icon: Eye,
      highlight: true,
      prices: [
        { name: "Fios Tecnológicos", price: "R$ 60" },
        { name: "Volume Efeito Natural", price: "R$ 80" },
        { name: "Fox Eyes", price: "R$ 85" },
        { name: "Fios Marrons", price: "R$ 90" },
        { name: "Volume Russo", price: "R$ 100" },
        { name: "Mega Volume", price: "R$ 120" },
      ],
      whatsappMsg: "Hellou Migles 💕, vim pelo site...\nGostaria de agendar o meu momento... Um lash design deslumbrante"
    },
    {
      title: "Brow Lamination",
      desc: "Alinhamento e modelagem dos fios da sobrancelha com efeito laminado. Resultado natural e duradouro por até 6 semanas.",
      icon: CheckCircle,
      highlight: false,
      prices: [
        { name: "Brow Lamination", price: "R$ 70" },
        { name: "Brow Lamination + Design", price: "R$ 85" },
        { name: "Brow Lamination + Henna + Design", price: "R$ 100" },
      ],
      whatsappMsg: "Hellou Migles 💕, vim pelo site...\nGostaria de agendar o meu momento... Uma brow lamination incrível"
    }
  ];

  return (
    <>
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
                  p-10 rounded-3xl h-full group transition-all duration-500 flex flex-col
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
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>

                <button
                  onClick={() => setSelectedService(service)}
                  className={`
                    w-full py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer
                    ${service.highlight
                      ? 'bg-terracotta text-white hover:bg-terracotta-dark shadow-lg hover:shadow-xl'
                      : 'bg-beige text-brown hover:bg-terracotta hover:text-white'
                    }
                  `}
                >
                  Confira os valores
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-brown/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-beige px-8 pt-8 pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center text-terracotta">
                      <selectedService.icon className="w-6 h-6" />
                    </div>
                    <div>
                      {selectedService.highlight && (
                        <span className="text-terracotta text-[10px] font-bold uppercase tracking-[0.2em] block mb-1">
                          ★ Mais Procurado
                        </span>
                      )}
                      <h3 className="font-serif text-2xl text-brown">{selectedService.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-brown/60 hover:text-brown transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{selectedService.desc}</p>
              </div>

              {/* Prices */}
              <div className="px-8 py-6">
                <h4 className="text-xs font-bold text-brown/40 uppercase tracking-widest mb-4">Valores</h4>
                <div className="space-y-3">
                  {selectedService.prices.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 px-4 rounded-xl bg-cream/60 hover:bg-cream transition-colors"
                    >
                      <span className="text-brown text-sm font-medium">{item.name}</span>
                      <span className="text-terracotta font-bold text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 pb-8">
                <a
                  href={`https://wa.me/5571985221450?text=${encodeURIComponent(selectedService.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-terracotta text-white text-center rounded-xl font-semibold text-sm tracking-wide hover:bg-terracotta-dark transition-colors shadow-lg hover:shadow-xl"
                >
                  Agendar agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
