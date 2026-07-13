import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { locations } from "../data/catalog";
import { reveal, withDelay } from "../constants/animation";

export function Locations() {
  return (
    <section id="puntos" className="locations">
      <div className="shell">
        <motion.div {...reveal} className="location-title">
          <p className="eyebrow light">Encuentra Freshly cerca de ti</p>
          <h2>
            Tu próximo antojo
            <br />
            está por <em>aquí.</em>
          </h2>
        </motion.div>
        <div className="place-grid">
          {locations.map((location, index) => (
            <motion.a
              key={location.name}
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
              {...reveal}
              transition={withDelay(index * 0.1)}
              className="place place-image"
              aria-label={`Ver ${location.name} en mapa`}
            >
              <img
                src={location.image}
                alt={`Información de ${location.name}`}
              />
              <span>
                Ver ubicación <ArrowUpRight />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
