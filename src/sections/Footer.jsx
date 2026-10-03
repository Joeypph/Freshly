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
          <a
            href="https://www.instagram.com/freshly.mx?utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Freshly en Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
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
