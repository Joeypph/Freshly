import { motion } from "motion/react";
import { empanadaOutline, foundersPhoto, mintIllustration } from "../assets";
import { reveal, withDelay } from "../constants/animation";

export function Story() {
  return (
    <section id="historia" className="story shell">
      <motion.div {...reveal} className="story-copy">
        <p className="eyebrow">Nuestra historia</p>
        <h2>
          Una receta que empezó con <em>nosotros.</em>
        </h2>
        <p>
          Somos Andreya y Jabel. Lo que comenzó en nuestra cocina como un
          experimento de sabor, hoy es Freshly.
        </p>
        <p>
          Cada empanada nace de la unión entre la cocina mexicana y la árabe:
          masa honesta, rellenos generosos y ese pequeño giro que no esperabas.
        </p>
        <div className="sign">
          A + J <span>hecho con cariño</span>
        </div>
      </motion.div>
      <motion.div
        {...reveal}
        transition={withDelay(0.1)}
        className="story-visual"
      >
        <img
          className="story-photo"
          src={foundersPhoto}
          alt="Jabel y Andreya, fundadores de Freshly"
        />
        <img className="story-line" src={empanadaOutline} alt="" />
        <img className="story-mint" src={mintIllustration} alt="" />
        <div className="orbit orbit-a" aria-hidden="true">
          ✦
        </div>
      </motion.div>
    </section>
  );
}
