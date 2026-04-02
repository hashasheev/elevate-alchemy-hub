const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground font-medium">EA © 2024</span>
      <nav className="flex gap-6">
        {["About", "Work", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
