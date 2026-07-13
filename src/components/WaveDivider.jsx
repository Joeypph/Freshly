const wavePath =
  "M0,64L26.7,90.7C53.3,117,107,171,160,197.3C213.3,224,267,224,320,218.7C373.3,213,427,203,480,170.7C533.3,139,587,85,640,69.3C693.3,53,747,75,800,101.3C853.3,128,907,160,960,160C1013.3,160,1067,128,1120,128C1173.3,128,1227,160,1280,160C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z";

export function WaveDivider({
  from,
  to,
  flip = false,
  overlap = false,
}) {
  return (
    <div
      className={`wave-divider${flip ? " wave-divider--flip" : ""}${overlap ? " wave-divider--overlap" : ""}`}
      style={{ "--wave-from": from, "--wave-to": to }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path d={wavePath} fill="currentColor" fillOpacity="1" />
      </svg>
    </div>
  );
}
