import type { SVGAttributes } from "react";

const SvgAddIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M13 6v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 1 1 2 0Z" />
  </svg>
);

export default SvgAddIcon;
