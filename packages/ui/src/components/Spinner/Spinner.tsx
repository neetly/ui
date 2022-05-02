import classNames from "classnames";
import type { SVGAttributes } from "react";

import styles from "./Spinner.module.scss";
import { SpinnerIcon } from "./SpinnerIcon";

type SpinnerProps = SVGAttributes<SVGSVGElement>;

const Spinner = ({ className, ...props }: SpinnerProps) => {
  return (
    <SpinnerIcon className={classNames(styles.icon, className)} {...props} />
  );
};

export { Spinner };
export type { SpinnerProps };
