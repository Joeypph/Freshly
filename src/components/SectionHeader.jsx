import { motion } from "motion/react";
import { reveal } from "../constants/animation";

export function SectionHeader({ eyebrow, title, description, className = "section-head" }) {
  return (
    <motion.div {...reveal} className={className}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        {title}
      </div>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
