import classNames from "classnames";
import type { Props } from "./Segmented.types";
import styles from "./Segmented.module.scss";

export const Segmented = (
  {
    color = "primary",
    radius = "m",
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
        styles[`radius-${radius}`],
        {
          [styles.fullwidth]: fullwidth,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
