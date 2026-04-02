import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const WorkSection = () => {
  const { t } = useTranslation();

  const works = (t("work.projects", { returnObjects: true }) as any[]).map((p, i) => {
    const images = [project1, project2, project3, project4];
    return { ...p, image: images[i] };
  });

  return (
    <section id="work" className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-12"
      >
        {t("work.title")}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
         {works.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={800}
                height={608}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-base font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground">
              {project.category} • {project.year || "2023"}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
