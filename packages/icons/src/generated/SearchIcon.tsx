import type { SVGProps } from "react";

const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
    <path d="m14.727 16.142 4.566 4.565a1 1 0 0 0 1.414-1.414l-4.565-4.566a7.792 7.792 0 0 1-1.415 1.415Z" />
    <path
      fillRule="evenodd"
      d="M13.914 15.805A7 7 0 1 1 6.086 4.196a7 7 0 0 1 7.828 11.609ZM10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
    />
  </svg>
);

export default SvgSearchIcon;
