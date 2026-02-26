import { motion } from 'motion/react';

export default function Transformation() {
  const transformations = [
    {
      title: "Olhar Marcante",
      desc: "Sobrancelhas que parecem naturalmente suas, na versão mais bonita possível.",
      img: "/olhar-marcante.jpg"
    },
    {
      title: "Harmonia Facial",
      desc: "O rosto mais harmônico, como se tudo tivesse 'encaixado' de vez.",
      img: "/harmonia-facial.jpg"
    },
    {
      title: "Autoestima Renovada",
      desc: "A sensação de estar pronta e confiante antes mesmo de chegar em casa.",
      img: "/autoestima.png"
    }
  ];

  return (
    <section className="py-24 bg-white bg-gradient-to-b from-beige to-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-brown mb-6">Imagine sair daqui e olhar no espelho assim:</h2>
          <p className="text-terracotta italic font-serif text-xl">Não é vaidade. É você se sentindo inteira.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group ${index === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-beige mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl text-brown mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
