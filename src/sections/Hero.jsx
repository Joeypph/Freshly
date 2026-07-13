import { motion } from "motion/react";
import { ArrowDown, Wheat } from "lucide-react";
import { heroPhoto } from "../assets";
import { reveal, withDelay } from "../constants/animation";
import { Header } from "../components/Header";

export function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      style={{ "--hero-image": `url(${heroPhoto})` }}
    >
      <Header />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <motion.p {...reveal} className="eyebrow light">
          <Wheat size={16} /> Hecho a mano · Cuernavaca
        </motion.p>
        <motion.h1 {...reveal} transition={withDelay(0.08)}>
          Cero complicaciones.
          <br />
          <em>Puro sabor.</em>
        </motion.h1>
        <motion.p
          {...reveal}
          transition={withDelay(0.16)}
          className="hero-lead"
        >
          Empanadas que abrazan. Focaccias que hacen que la mesa se quede en
          silencio.
        </motion.p>
        <motion.a
          {...reveal}
          transition={withDelay(0.24)}
          href="#menu"
          className="button cream"
        >
          Descubre el menú <ArrowDown size={18} />
        </motion.a>
      </div>
      <div className="hero-tag">
        Horneado
        <br />
        <strong>hoy</strong>
      </div>
    </section>
  );
}
