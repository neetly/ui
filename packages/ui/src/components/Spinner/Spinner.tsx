import classNames from "classnames";
import type { HTMLAttributes } from "react";

import { VisuallyHidden } from "../VisuallyHidden";
import styles from "./Spinner.module.scss";
import { SpinnerIcon } from "./SpinnerIcon";

type SpinnerProps = HTMLAttributes<HTMLSpanElement>;

const Spinner = ({ className, ...props }: SpinnerProps) => {
  return (
    <span
      className={classNames(styles.spinner, className)}
      role="status"
      {...props}
    >
      <SpinnerIcon className={styles.icon} />
      <VisuallyHidden>Loading…</VisuallyHidden>
    </span>
  );
};

export { Spinner };
export type { SpinnerProps };
