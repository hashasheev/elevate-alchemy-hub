import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
  const { t } = useTranslation();

  const skills = t("skills.list", { returnObjects: true }) as string[];
  const segments = t("skills.segmentsList", { returnObjects: true }) as string[];

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
            {t("skills.title")}
          </h2>
          <ul className="divide-y divide-border">
            {skills.map((skill) => (
              <li key={skill} className="py-4 text-sm md:text-base font-medium text-foreground">
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
            {t("skills.segmentsTitle")}
          </h2>
          <ul className="divide-y divide-border">
            {segments.map((seg) => (
              <li key={seg} className="py-4 text-sm md:text-base font-medium text-foreground">
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
