import type { SVGProps } from "react";

const SvgCheckboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path
      fillRule="evenodd"
      d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm15 2H5v14h14V5Z"
    />
  </svg>
);

export default SvgCheckboxIcon;
