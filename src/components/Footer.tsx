import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground font-medium">EA © {new Date().getFullYear()}</span>
      <nav className="flex gap-6">
        {[
          { label: t("nav.about"), id: "about" },
          { label: t("nav.work"), id: "work" },
          { label: t("nav.contact"), id: "contact" }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
