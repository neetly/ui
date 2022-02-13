import type { SVGProps } from "react";

const SvgLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M6.5 2a2 2 0 0 1 2 2c0 2.85 1.805 4.294 4.676 6.383l.191.138C15.98 12.418 19.5 14.974 19.5 20a2 2 0 1 1-4 0c0-2.85-1.805-4.294-4.676-6.383l-.19-.137-.001-.001C8.02 11.582 4.5 9.026 4.5 4a2 2 0 0 1 2-2Zm0 14a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2Zm13-12a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0V4Z" />
  </svg>
);

export default SvgLogoIcon;
