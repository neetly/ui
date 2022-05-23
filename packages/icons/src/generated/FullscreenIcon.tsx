import type { SVGAttributes } from "react";

const SvgFullscreenIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7v3a1 1 0 1 1-2 0V6Zm0 12v-4a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm13 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Zm1-13v4a1 1 0 1 1-2 0V7h-3a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Z" />
  </svg>
);

export default SvgFullscreenIcon;
