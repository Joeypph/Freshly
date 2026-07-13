import { Camera } from "lucide-react";
import { Logo } from "../components/Logo";

export function Footer() {
  return (
    <footer>
      <div className="footer-top shell">
        <h2>
          Nos vemos
          <br />
          en la mesa.
        </h2>
        <div>
          <p>
            Síguenos para sabores, fechas
            <br />y antojos recién salidos.
          </p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Camera /> @freshly.mx
          </a>
        </div>
      </div>
      <div className="footer-bottom shell">
        <Logo />
        <span>© 2026 Freshly · Cuernavaca, México</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
