import type { SVGAttributes } from "react";

const SvgFullscreenIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M5 4h4a1 1 0 1 1 0 2H6v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm15 1v4a1 1 0 1 1-2 0V6h-3a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Zm0 14a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v4ZM4 19v-4a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
  </svg>
);

export default SvgFullscreenIcon;
