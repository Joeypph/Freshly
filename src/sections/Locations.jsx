import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { locations } from "../data/catalog";
import { reveal, withDelay } from "../constants/animation";

export function Locations() {
  return (
    <section id="puntos" className="locations">
      <div className="shell">
        <SectionHeader
          className="location-title"
          eyebrow="Encuentra Freshly cerca de ti"
          title={
            <h2>
              Tu próximo antojo está por <em>aquí.</em>
            </h2>
          }
        />
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
