import type { SVGAttributes } from "react";
import { useId } from "react";

import styles from "./SpinnerIcon.module.scss";

type SpinnerIconProps = SVGAttributes<SVGSVGElement>;

const SpinnerIcon = (props: SpinnerIconProps) => {
  const leftMaskId = useId();
  const rightMaskId = useId();

  return (
    <svg viewBox="0 0 48 48" {...props}>
      <mask
        id={leftMaskId}
        maskUnits="userSpaceOnUse"
        x={-24}
        y={-24}
        width={96}
        height={96}
        style={{ maskType: "alpha" }}
      >
        <path
          className={styles.leftMask}
          d="M17.573 7.457a3 3 0 0 0-4.117-1.03l-30 18a3 3 0 0 0-1.029 4.117l18 30a3 3 0 0 0 4.116 1.029l30-18a3 3 0 0 0 1.03-4.117l-18-30Z"
          fill="#000"
        />
      </mask>
      <mask
        id={rightMaskId}
        maskUnits="userSpaceOnUse"
        x={-24}
        y={-24}
        width={96}
        height={96}
        style={{ maskType: "alpha" }}
      >
        <path
          className={styles.rightMask}
          d="M47.572-10.543a3 3 0 0 0-4.116-1.03l-30 18a3 3 0 0 0-1.028 4.117l18 30a3 3 0 0 0 4.116 1.029l30-18a3 3 0 0 0 1.029-4.117l-18-30Z"
          fill="#000"
        />
      </mask>
      <path
        d="M15 30a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0v-6a3 3 0 0 1 3-3Z"
        mask={`url(#${leftMaskId})`}
      />
      <path
        d="M33 6a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0V9a3 3 0 0 1 3-3Z"
        mask={`url(#${rightMaskId})`}
      />
      <path
        className={styles.divider}
        d="M13.457 6.428a3 3 0 0 1 4.116 1.029l18 30a3 3 0 0 1-5.146 3.087l-18-30a3 3 0 0 1 1.03-4.116Z"
      />
    </svg>
  );
};

export { SpinnerIcon };
export type { SpinnerIconProps };
