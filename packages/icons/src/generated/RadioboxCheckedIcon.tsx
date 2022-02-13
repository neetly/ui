import type { SVGProps } from "react";

const SvgRadioboxCheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    <path
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
);

export default SvgRadioboxCheckedIcon;
