import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#historia", label: "Nuestra historia" },
  { href: "#menu", label: "Menú" },
  { href: "#puntos", label: "Encuéntranos" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className="nav">
      <Logo />
      <nav id="primary-navigation" className={isOpen ? "open" : ""} aria-label="Navegación principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a className="nav-cta" href="#puntos" onClick={closeMenu}>
          Quiero probar <ArrowUpRight size={17} />
        </a>
      </nav>
      <button
        type="button"
        className="menu-btn"
        onClick={() => setIsOpen((open) => !open)}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
