import React from "react";
import classNames from "classnames";
import type { Props } from "./Grid.types";
import styles from "./Grid.module.scss";

export const Grid = (
  {
    columns = 3,
    align = "flex-start",
    laptopAlign,
    tabletAlign,
    mobileAlign,
    gap = 24,
    laptopGap,
    tabletGap,
    mobileGap,
    children,
    className,
    ...rest
  }: Props) => {
  return (
    <div
      className={classNames(
        styles.grid,
        styles[`columns-${columns}`],
        {
          [`align-items-${align}`]: align,
          [`laptop-align-items-${laptopAlign}`]: laptopAlign,
          [`tablet-align-items-${tabletAlign}`]: tabletAlign,
          [`mobile-align-items-${mobileAlign}`]: mobileAlign,
          [`gap-${gap}`]: gap != null,
          [`laptop-gap-${laptopGap}`]: laptopGap != null,
          [`tablet-gap-${tabletGap}`]: tabletGap != null,
          [`mobile-gap-${mobileGap}`]: mobileGap != null,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
