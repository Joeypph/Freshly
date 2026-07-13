import { useEffect } from "react";

const clouds = Array.from({ length: 12 }, (_, index) => index);

export function KitchenSmoke({ onComplete, duration = 3200 }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <div className="smoke-loader" role="status" aria-label="Freshly está cargando">
      <svg className="smoke-filters" aria-hidden="true">
        <filter id="smoke-turbulence" x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.018" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="42" xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </svg>
      <div className="loader-brand">
        <span className="loader-mark">F</span>
        <strong>freshly.</strong>
        <small>Horneando algo delicioso</small>
      </div>
      <div className="kitchen-smoke kitchen-smoke--loader" aria-hidden="true">
        {clouds.map((cloud) => (
          <span key={cloud} className={`smoke-cloud smoke-cloud--${cloud + 1}`} />
        ))}
      </div>
    </div>
  );
}
