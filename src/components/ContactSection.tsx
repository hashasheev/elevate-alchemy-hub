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
        className="text-4xl md:text-6xl font-bold tracking-tighter mb-12"
      >
        Drop me a
        <br />
        message.
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
          className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:opacity-80 transition-opacity duration-200 rounded-sm"
        >
          Email Me
        </a>

        <div className="flex flex-wrap gap-6 pt-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">{s.name}</span>
              <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Connect
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
