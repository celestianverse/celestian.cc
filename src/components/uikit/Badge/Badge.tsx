import classNames from "classnames";
import type { BadgeProps } from "./Badge.types";
import styles from "./Badge.module.scss";

export const Badge = (
  {
    color = "primary",
    tone = "base",
    size = "m",
    radius = 999,
    dot,
    className,
    children,
    ...rest
  }: BadgeProps) => {
  return (
    <span
      className={classNames(
        styles.badge,
        styles[`color-${color}`],
        styles[`tone-${tone}`],
        styles[`size-${size}`],
        {
          [`border-radius-${radius}`]: radius != null,
          [styles.dot]: dot,
        },
        className,
      )}
      {...rest}
    >
      {!dot && children}
    </span>
  );
};
