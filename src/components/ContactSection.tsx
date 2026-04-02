import { motion } from "framer-motion";

const socials = [
  { name: "X (Twitter)", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 border-t border-border">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-12"
      >
        ENTRE EM
        <br />
        CONTATO.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        <a
          href="mailto:contato@eversonalcantara.com"
          className="inline-flex items-center justify-center border border-foreground text-foreground px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-200 rounded-sm"
        >
          Enviar E-mail
        </a>

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
