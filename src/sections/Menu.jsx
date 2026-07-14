import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { boardIllustration, seedsIllustration } from "../assets";
import { SectionHeader } from "../components/SectionHeader";
import { WaveDivider } from "../components/WaveDivider";
import { reveal, withDelay } from "../constants/animation";
import { empanadas, focaccias, popcornFlavors } from "../data/catalog";

const poppingKernels = [
  [4, -55, 10.8, -0.2],
  [13, 70, 9.9, -4.4],
  [22, -45, 11.7, -2.2],
  [31, 65, 10.5, -5.8],
  [40, -80, 11.2, -1.9],
  [49, 45, 9.6, -6.1],
  [58, -65, 12, -3.1],
  [67, 75, 10.9, -7],
  [76, -50, 10.2, -1.7],
  [85, 60, 11.4, -5.2],
  [94, -75, 10, -2.8],
  [8, 50, 12.3, -6.6],
  [18, -60, 10.3, -3.8],
  [36, 80, 11.1, -0.8],
  [53, -40, 9.8, -4.9],
  [64, 55, 11.8, -2.9],
  [73, -70, 10.6, -6.3],
  [89, 45, 11.5, -4.1],
  [27, 65, 9.9, -5.5],
  [81, -55, 12.1, -1.2],
];

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

function PopcornBucket() {
  return (
    <div className="popcorn-bucket" aria-hidden="true">
      <div className="popcorn-bucket__kernels">
        {Array.from({ length: 7 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="popcorn-bucket__cup" />
    </div>
  );
}

function PopcornCard({ item, index }) {
  return (
    <motion.article
      {...reveal}
      transition={withDelay((index % 2) * 0.08)}
      className={`popcorn-card popcorn-card--${item.tone}`}
    >
      <span className="popcorn-card__number">0{index + 1}</span>
      <div className="popcorn-card__copy">
        <small>{item.note}</small>
        <h3>{item.name}</h3>
      </div>
      <div className="popcorn-card__art" aria-hidden="true">
        <PopcornBucket />
        <span className="popcorn-card__flavor">{item.icon}</span>
      </div>
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

      <WaveDivider from="#fffdf8" to="#f8f1d8" variant="rolling" />

      <section className="popcorn-section">
        <div className="popcorn-animation" aria-hidden="true">
          {poppingKernels.map(([left, x, duration, delay], index) => (
            <div
              key={index}
              className="popcorn"
              style={{
                "--left": `${left}%`,
                "--x": `${x}px`,
                "--x-pop": `${x * 0.12}px`,
                "--x-settle": `${x * 0.18}px`,
                "--x-end": `${x * 1.4}px`,
                "--duration": `${duration}s`,
                "--delay": `${delay}s`,
              }}
            >
              <span />
            </div>
          ))}
        </div>

        <div className="shell popcorn-shell">
          <SectionHeader
            eyebrow="El snack que hace pop"
            title={<h2>Nuestras <em>palomitas</em></h2>}
            description="Ocho sabores para compartir, mezclar o quedarte la bolsa completa. No juzgamos."
          />
          <div className="popcorn-grid">
            {popcornFlavors.map((item, index) => (
              <PopcornCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
