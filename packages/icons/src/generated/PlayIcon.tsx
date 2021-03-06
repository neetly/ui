import type { SVGAttributes } from "react";

const SvgPlayIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="m7.555 3.168 12 8a1 1 0 0 1 0 1.664l-12 8A1 1 0 0 1 6 20V4a1 1 0 0 1 1.555-.832Z" />
  </svg>
);

export default SvgPlayIcon;
