import type { SVGAttributes } from "react";

const SvgStopIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z" />
  </svg>
);

export default SvgStopIcon;
