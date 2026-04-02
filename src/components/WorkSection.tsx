import { motion } from "framer-motion";

const projects = [
  { title: "Integração de Dados Preditivos", category: "Fintech", year: "2023" },
  { title: "Automação de Conteúdo via IA", category: "SaaS", year: "2024" },
  { title: "Rebranding & Arquitetura Visual", category: "Varejo", year: "2023" },
  { title: "Campanha de Performance B2B", category: "Tecnologia", year: "2022" },
];

const WorkSection = () => {
  return (
    <section id="work" className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold tracking-tighter mb-16"
      >
        Selected Work
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-card rounded-sm overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/3] bg-secondary flex items-center justify-center transition-colors duration-300 group-hover:bg-accent">
              <span className="text-5xl md:text-6xl font-bold text-muted-foreground/20 tracking-tighter">
                0{i + 1}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                {project.category} • {project.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
