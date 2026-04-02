import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const socials = [
  { name: "Behance", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "X (Twitter)", href: "#" },
];

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 whitespace-pre-line"
      >
        {t("contact.title")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5511999999999" // TODO: Add real number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-foreground text-foreground px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-200 rounded-sm"
          >
            {t("contact.whatsappButton")}
          </a>
          <a
            href="mailto:contato@eversonalcantara.com"
            className="inline-flex items-center justify-center border border-foreground text-foreground px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-200 rounded-sm"
          >
            {t("contact.emailButton")}
          </a>
        </div>

        <div className="flex flex-col divide-y divide-border pt-8">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="py-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
