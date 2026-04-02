const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground font-medium">EA © 2024</span>
      <nav className="flex gap-6">
        {[
          { label: "Sobre", id: "about" },
          { label: "Projetos", id: "work" },
          { label: "Contato", id: "contact" }
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
