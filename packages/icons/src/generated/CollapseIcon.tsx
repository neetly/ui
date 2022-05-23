import type { SVGProps } from "react";

const SvgCollapseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M8.707 5.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 8.586 8.707 5.293Zm6.586 13.414a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L12 15.414l3.293 3.293Z" />
  </svg>
);

export default SvgCollapseIcon;
