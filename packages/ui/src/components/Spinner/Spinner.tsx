import classNames from "classnames";
import type { HTMLAttributes } from "react";

import styles from "./Spinner.module.scss";
import { SpinnerIcon } from "./SpinnerIcon";

type SpinnerProps = HTMLAttributes<HTMLDivElement>;

const Spinner = ({ className, ...props }: SpinnerProps) => {
  return (
    <div className={classNames(styles.spinner, className)} {...props}>
      <SpinnerIcon className={styles.icon} />
    </div>
  );
};

export { Spinner };
export type { SpinnerIcon };
