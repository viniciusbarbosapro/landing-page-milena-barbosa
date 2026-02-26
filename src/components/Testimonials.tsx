import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Me senti outra pessoa quando me vi no espelho. A Milena me explicou tudo antes... quando vi o resultado, chorei de emoção. Ficou EU, só que melhor.",
      author: "Fernanda R.",
      role: "Cliente há 1 ano",
      initials: "FR",
      color: "text-terracotta",
      bg: "bg-terracotta/20"
    },
    {
      quote: "Fiz o lash design e nem sabia que ia gostar tanto. O olho abriu, o rosto ficou mais jovem, mais descansado. Não consigo mais me imaginar sem.",
      author: "Renata M.",
      role: "Lash Design",
      initials: "RM",
      color: "text-sage",
      bg: "bg-sage/20"
    },
    {
      quote: "Acordo pronta todo dia. Fiz o lifting de cílios e mudou minha rotina. Economizo tempo, me sinto bonita e recebo elogios todo dia.",
      author: "Ana Luiza S.",
      role: "Lifting",
      initials: "AL",
      color: "text-terracotta",
      bg: "bg-terracotta/20"
    }
  ];

  return (
    <section className="py-24 bg-brown text-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage opacity-10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl text-white">O que dizem quem já passou por aqui</h2>
          <div className="w-12 h-1 bg-terracotta mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 relative transition-transform hover:-translate-y-2 duration-500 ${index === 1 ? 'md:mt-10' : ''}`}
            >
              <Quote className="text-terracotta w-12 h-12 absolute -top-6 left-10 fill-terracotta/20" />
              
              <div className="flex text-copper mb-6 mt-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-copper" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 leading-relaxed font-light">"{item.quote}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center text-sm font-bold ${item.color}`}>
                  {item.initials}
                </div>
                <div>
                  <p className="font-serif text-white text-lg">{item.author}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
