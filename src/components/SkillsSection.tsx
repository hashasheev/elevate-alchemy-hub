import { motion } from "framer-motion";

const skills = [
  "Estratégia de Marketing Digital",
  "Implementação de IA Generativa",
  "Análise de Dados Avançada",
  "Gestão de Campanhas de Performance",
  "Branding & Posicionamento",
];

const segments = [
  "Tecnologia & SaaS",
  "Varejo & E-commerce",
  "Setor Financeiro & Fintechs",
  "Educação Superior",
  "Saúde & Bem-estar",
];

const SkillsSection = () => {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Skills
          </h2>
          <ul className="space-y-4">
            {skills.map((skill) => (
              <li key={skill} className="text-lg md:text-xl font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Expertise Segments
          </h2>
          <ul className="space-y-4">
            {segments.map((seg) => (
              <li key={seg} className="text-lg md:text-xl font-medium">
                {seg}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
