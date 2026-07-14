import { useEffect } from "react";

const wisps = Array.from({ length: 14 }, (_, index) => index + 1);

export function KitchenSmoke({ onComplete, duration = 4600 }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => onComplete?.(),
      prefersReducedMotion ? 500 : duration,
    );

    return () => window.clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <div
      className="smoke-loader"
      role="status"
      aria-label="Freshly está cargando"
      style={{ "--smoke-total": `${duration}ms` }}
    >
      <svg className="smoke-filters" aria-hidden="true">
        <filter
          id="smoke-turbulence"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.022"
            numOctaves="4"
            seed="12"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="68"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </svg>

      <div className="loader-brand">
        <span className="loader-brand__eyebrow">Recién salido del horno</span>
        <strong>freshly</strong>
        <span className="loader-brand__rule" aria-hidden="true" />
      </div>

      <div className="smoke-atmosphere" aria-hidden="true">
        <span className="smoke-haze smoke-haze--back" />
        <span className="smoke-haze smoke-haze--front" />
        {wisps.map((wisp) => (
          <span key={wisp} className={`smoke-wisp smoke-wisp--${wisp}`} />
        ))}
      </div>
    </div>
  );
}
