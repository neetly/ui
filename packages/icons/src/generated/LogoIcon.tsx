import type { SVGProps } from "react";

const SvgLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M6.728 3.214a1.5 1.5 0 0 1 2.058.514l9 15a1.5 1.5 0 0 1-2.572 1.544l-9-15a1.5 1.5 0 0 1 .514-2.058ZM7.5 15A1.5 1.5 0 0 1 9 16.5v3a1.5 1.5 0 1 1-3 0v-3A1.5 1.5 0 0 1 7.5 15ZM18 4.5a1.5 1.5 0 1 0-3 0v3a1.5 1.5 0 0 0 3 0v-3Z" />
  </svg>
);

export default SvgLogoIcon;
