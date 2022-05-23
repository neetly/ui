import type { SVGProps } from "react";

const SvgFullscreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7v3a1 1 0 1 1-2 0V6Zm0 12a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2H7v-3a1 1 0 1 0-2 0v4Zm13 1a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3h-3a1 1 0 1 0 0 2h4Zm1-13a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0V6Z" />
  </svg>
);

export default SvgFullscreenIcon;
