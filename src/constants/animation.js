export const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] },
};

export const withDelay = (delay) => ({
  ...reveal.transition,
  delay,
});
