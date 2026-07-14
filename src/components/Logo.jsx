import { brandLogo } from "../assets";

export function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Freshly, ir al inicio">
      <img src={brandLogo} alt="Freshly Empanadas" />
    </a>
  );
}
