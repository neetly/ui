import type { SVGProps } from "react";

const SvgAddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z" />
  </svg>
);

export default SvgAddIcon;
