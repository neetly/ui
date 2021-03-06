import type { SVGAttributes } from "react";

const SvgCaretUp = (props: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M16 14H8a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 14Z" />
  </svg>
);

export default SvgCaretUp;
