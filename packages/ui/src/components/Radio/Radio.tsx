import classNames from "classnames";
import type { ElementType } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./Radio.module.scss";

type RadioOwnProps = {
  className?: string;
  label?: string;
  disabled?: boolean;
};

type RadioProps<Element extends ElementType> = //
  PolymorphicProps<Element, RadioOwnProps>;

const Radio = createPolymorphicComponent(
  "Radio",
  <Element extends ElementType = "input">({
    as,
    className,
    label,
    disabled,
    ...props
  }: RadioProps<Element>) => {
    const Component = as ?? "input";

    return (
      <label
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : null}
      >
        <Component
          className={styles.radio}
          type="radio"
          disabled={disabled}
          {...props}
        />
        <span className={styles.content}>
          <span className={styles.indicator}>
            <span className={styles.indicatorIcon} />
          </span>
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

export { Radio };
export type { RadioOwnProps, RadioProps };
