import classNames from "classnames";
import type { HTMLAttributes } from "react";

import styles from "./Pagination.module.scss";

type PaginationOwnProps = {
  className?: string;
};

type PaginationProps = PaginationOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof PaginationOwnProps>;

const Pagination = ({ className, ...props }: PaginationProps) => {
  return (
    <nav
      className={classNames(styles.pagination, className)}
      aria-label="Pagination"
      {...props}
    >
      <ul></ul>
    </nav>
  );
};

export { Pagination };
export type { PaginationOwnProps, PaginationProps };
