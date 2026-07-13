import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { boardIllustration, seedsIllustration } from "../assets";
import { SectionHeader } from "../components/SectionHeader";
import { WaveDivider } from "../components/WaveDivider";
import { reveal, withDelay } from "../constants/animation";
import { empanadas, focaccias } from "../data/catalog";

function EmpanadaCard({ item, index }) {
  return (
    <motion.article
      {...reveal}
      transition={withDelay((index % 4) * 0.07)}
      className={`emp-card ${item.tone}`}
    >
      <div className="number">0{index + 1}</div>
      <div className="emp-product-stage">
        <img className="product-board" src={boardIllustration} alt="" />
        <img className="food-icon" src={item.image} alt={`Empanada de ${item.name}`} />
      </div>
      <img className="ingredient-accent" src={item.accent} alt="" />
      <div>
        <small>{item.note}</small>
        <h3>{item.name}</h3>
      </div>
      <ArrowUpRight className="corner" aria-hidden="true" />
    </motion.article>
  );
}

function FocacciaCard({ item, index }) {
  return (
    <motion.article
      {...reveal}
      transition={withDelay((index % 3) * 0.06)}
      className="foc-item"
    >
      <span className="foc-num">0{index + 1}</span>
      <div className="foc-product-stage">
        <img className="product-board" src={boardIllustration} alt="" />
        <img className="foc-icon" src={item.image} alt={`Focaccia de ${item.name}`} />
      </div>
      <h3>{item.name}</h3>
      <span>Focaccia artesanal</span>
    </motion.article>
  );
}

export function MenuSection() {
  return (
    <>
      <section id="menu" className="menu-section">
        <div className="shell">
          <SectionHeader
            eyebrow="Rellenas de cosas buenas"
            title={<h2>Nuestras <em>empanadas</em></h2>}
            description="Cuatro sabores, una masa dorada y cero decisiones equivocadas."
          />
          <div className="emp-grid">
            {empanadas.map((item, index) => (
              <EmpanadaCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="#f7f1e5" to="#fffdf8" flip />

      <section className="focaccia shell">
        <motion.img {...reveal} className="seeds-decor" src={seedsIllustration} alt="" />
        <SectionHeader
          eyebrow="Esponjosas. Crujientes."
          title={<h2>Nuestras <em>focaccias</em></h2>}
          description="Fermentadas con calma y terminadas con ingredientes que sí reconoces."
        />
        <div className="foc-grid">
          {focaccias.map((item, index) => (
            <FocacciaCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
