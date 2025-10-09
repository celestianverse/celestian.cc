import classNames from "classnames";
import type { SegmentsProps } from "./Segments.types";
import styles from "./Segments.module.scss";

export const Segments = (
  {
    color = "primary",
    radius = 12,
    fullwidth,
    className,
    children,
    ...rest
  }: SegmentsProps) => {
  return (
    <div
      className={classNames(
        styles.segments,
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
