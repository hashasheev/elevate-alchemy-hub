import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]"
        >
          EVERSON
          <br />
          ALCANTARA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-2 mb-8"
        >
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Marketing & IA
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Publicitário com 10+ anos de experiência. Especialista em transformar
          desafios de marketing em resultados utilizando inteligência artificial.
          Foco em performance, estratégia clara e execução impecável para marcas
          que exigem excelência.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
