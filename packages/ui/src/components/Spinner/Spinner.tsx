import classNames from "classnames";
import type { HTMLAttributes } from "react";

import { VisuallyHidden } from "../VisuallyHidden";
import styles from "./Spinner.module.scss";
import { SpinnerIcon } from "./SpinnerIcon";

type SpinnerOwnProps = {
  className?: string;
};

type SpinnerProps = SpinnerOwnProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof SpinnerOwnProps>;

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
export type { SpinnerOwnProps, SpinnerProps };
