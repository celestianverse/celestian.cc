import classNames from "classnames";
import type { Props } from "./Segmented.types";
import styles from "./Segmented.module.scss";

export const Segmented = (
  {
    color = "primary",
    radius = 12,
    fullwidth,
    className,
    children,
    ...rest
  }: Props) => {
  return (
    <div
      className={classNames(
        styles.segmented,
        styles[`color-${color}`],
        {
          ["fullwidth"]: fullwidth,
          [`border-radius-${radius}`]: radius != null,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
