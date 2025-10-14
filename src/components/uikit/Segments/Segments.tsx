import classNames from "classnames";
import type { SegmentsProps } from "./Segments.types";
import styles from "./Segments.module.scss";

export const Segments = (
  {
    color = "primary",
    direction,
    laptopDirection,
    tabletDirection,
    mobileDirection,
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
          [`flex-direction-${direction}`]: direction,
          [`laptop-flex-direction-${laptopDirection}`]: laptopDirection,
          [`tablet-flex-direction-${tabletDirection}`]: tabletDirection,
          [`mobile-flex-direction-${mobileDirection}`]: mobileDirection,
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
