import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, Wheat } from "lucide-react";
import { heroPhoto } from "../assets";
import { reveal, withDelay } from "../constants/animation";
import { Header } from "../components/Header";

export function Hero() {
  const heroRef = useRef(null);
  const copyRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const copy = copyRef.current;
    const mobile = window.matchMedia("(max-width: 1024px)");
    let layoutWidth;
    let baseHeight = 0;
    let bottomSpace = 0;

    const fitContent = () => {
      if (!mobile.matches) return;
      const height = Math.max(baseHeight, copy.offsetHeight + bottomSpace + 98);
      hero.style.setProperty("--stable-hero-height", `${height}px`);
    };

    const stabilizeLayout = () => {
      const width = document.documentElement.clientWidth;
      // Toolbar changes during scrolling should not reset the hero geometry.
      if (width === layoutWidth) return;
      layoutWidth = width;
      hero.style.removeProperty("--stable-hero-height");
      hero.style.removeProperty("--stable-hero-bottom");
      if (!mobile.matches) return;

      baseHeight = hero.getBoundingClientRect().height;
      const bottom = window.getComputedStyle(copy).bottom;
      bottomSpace = parseFloat(bottom) || 0;
      hero.style.setProperty("--stable-hero-bottom", bottom);
      fitContent();
    };

    stabilizeLayout();
    const observer = new ResizeObserver(fitContent);
    observer.observe(copy);
    window.addEventListener("resize", stabilizeLayout);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", stabilizeLayout);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      id="inicio"
      style={{ "--hero-image": `url(${heroPhoto})` }}
    >
      <Header />
      <div className="hero-shade" aria-hidden="true" />
      <div ref={copyRef} className="hero-copy">
        <motion.p {...reveal} className="eyebrow light">
          <Wheat size={16} /> Hecho a mano · Cuernavaca
        </motion.p>
        <motion.h1 {...reveal} transition={withDelay(0.08)}>
          Cero complicaciones.
        </motion.h1>
        <motion.h1 {...reveal} transition={withDelay(0.08)}>
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
