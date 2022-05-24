import type { SVGAttributes } from "react";

const SvgCaretDown = (props: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M8 10h8a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8 10Z" />
  </svg>
);

export default SvgCaretDown;
